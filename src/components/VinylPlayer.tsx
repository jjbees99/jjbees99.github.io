import { useRef } from 'react';
import { useVinylPlayback } from './VinylPlayback';

const PARKED_ANGLE = -38;
const PLAYING_ANGLE = -12;
const STATE_THRESHOLD = -26;
const BASE_ARM_ANGLE = 136.4;

export function VinylPlayer() {
  const deckRef = useRef<HTMLDivElement>(null);
  const tonearmRef = useRef<HTMLButtonElement>(null);
  const angleRef = useRef(PARKED_ANGLE);
  const draggingRef = useRef(false);
  const { playing, play, pause, toggle } = useVinylPlayback();

  const playRecord = async () => {
    draggingRef.current = false;
    tonearmRef.current?.classList.remove('dragging');
    tonearmRef.current?.style.removeProperty('transform');
    angleRef.current = PLAYING_ANGLE;
    await play();
  };

  const parkRecord = () => {
    draggingRef.current = false;
    tonearmRef.current?.classList.remove('dragging');
    tonearmRef.current?.style.removeProperty('transform');
    angleRef.current = PARKED_ANGLE;
    pause();
  };

  const togglePlayback = () => {
    if (playing) {
      tonearmRef.current?.style.removeProperty('transform');
      angleRef.current = PARKED_ANGLE;
    } else {
      angleRef.current = PLAYING_ANGLE;
    }
    toggle();
  };

  const angleFromPointer = (clientX: number, clientY: number) => {
    const rect = deckRef.current?.getBoundingClientRect();
    if (!rect) return PARKED_ANGLE;
    const pivotX = rect.left + rect.width * .8255;
    const pivotY = rect.top + rect.height * .3457;
    return Math.atan2(clientY - pivotY, clientX - pivotX) * 180 / Math.PI - BASE_ARM_ANGLE;
  };

  const setArm = (angle: number) => {
    const constrained = Math.max(PARKED_ANGLE, Math.min(PLAYING_ANGLE, angle));
    angleRef.current = constrained;
    if (tonearmRef.current) tonearmRef.current.style.transform = `rotate(${constrained}deg) scale(.45)`;
  };

  return <div className="deck-area">
    <div className={`deck${playing ? ' playing' : ''}`} ref={deckRef} aria-label="Interactive record player">
      <img className="player" src="/media/Vinyl/player.png" alt="Wooden record player" />
      <div className="vinyl-wrap">
        <img className="vinyl" src="/media/Vinyl/ChatGPT%20Image%20Aug%2017,%202026,%2008_34_45%20PM.png" alt="Blue Devine Devine vinyl record" />
      </div>
      <button
        className="tonearm"
        ref={tonearmRef}
        type="button"
        aria-label="Hold and drag the tonearm onto or off the record"
        aria-pressed={playing}
        onPointerDown={(event) => {
          draggingRef.current = true;
          event.currentTarget.classList.add('dragging');
          event.currentTarget.setPointerCapture(event.pointerId);
          setArm(angleFromPointer(event.clientX, event.clientY));
        }}
        onPointerMove={(event) => {
          if (draggingRef.current) setArm(angleFromPointer(event.clientX, event.clientY));
        }}
        onPointerUp={() => angleRef.current >= STATE_THRESHOLD ? void playRecord() : parkRecord()}
        onPointerCancel={() => angleRef.current >= STATE_THRESHOLD ? void playRecord() : parkRecord()}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            togglePlayback();
          }
        }}
      >
        <img src="/media/Vinyl/stick.png" alt="" />
      </button>
      <button className="start-stop-hit" type="button" aria-label="Start or stop the record" aria-pressed={playing} onClick={togglePlayback} />
    </div>
    <div className="move-prompt" aria-hidden="true"><b>Move the needle</b></div>
    <p className="deck-caption"><span>{playing ? 'Now playing' : 'Interactive player'}</span><span>{playing ? 'Drag the needle back to stop' : 'Drag the needle to play'}</span></p>
  </div>;
}
