import { createContext, useContext, useEffect, useRef, useState } from 'react';

const PLAYBACK_KEY = 'devine-devine-vinyl-playback';

type VinylPlaybackValue = {
  playing: boolean;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
};

const VinylPlaybackContext = createContext<VinylPlaybackValue | null>(null);

export function VinylPlaybackProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(false);

  const setPlaybackState = (active: boolean) => {
    playingRef.current = active;
    setPlaying(active);
  };

  const savePlayback = (active: boolean) => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      sessionStorage.setItem(PLAYBACK_KEY, JSON.stringify({ active, time: audio.currentTime || 0 }));
    } catch {
      // Playback still works when browser storage is unavailable.
    }
  };

  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    setPlaybackState(true);
    try {
      await audio.play();
      savePlayback(true);
    } catch {
      // A later visitor gesture can satisfy the browser's autoplay policy.
    }
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlaybackState(false);
    savePlayback(false);
  };

  const toggle = () => playingRef.current ? pause() : void play();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = .4;

    let saved: { active?: boolean; time?: number } | null = null;
    try {
      saved = JSON.parse(sessionStorage.getItem(PLAYBACK_KEY) || 'null');
    } catch {
      saved = null;
    }

    if (saved?.active) {
      audio.currentTime = Number(saved.time) || 0;
      setPlaybackState(true);
      const resume = () => void audio.play().then(() => savePlayback(true)).catch(() => {});
      resume();
      document.addEventListener('pointerdown', resume, { once: true });
    }

    const persist = () => savePlayback(!audio.paused);
    audio.addEventListener('timeupdate', persist);
    window.addEventListener('pagehide', persist);
    return () => {
      audio.removeEventListener('timeupdate', persist);
      window.removeEventListener('pagehide', persist);
    };
  }, []);

  return <VinylPlaybackContext.Provider value={{ playing, play, pause, toggle }}>
    {children}
    <audio ref={audioRef} preload="metadata" loop src="/media/Vinyl/Between%20Us.mp3" />
  </VinylPlaybackContext.Provider>;
}

export function useVinylPlayback() {
  const value = useContext(VinylPlaybackContext);
  if (!value) throw new Error('useVinylPlayback must be used inside VinylPlaybackProvider');
  return value;
}
