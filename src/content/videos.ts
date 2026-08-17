import type { VideoItem } from '../types/content';

const media = `${import.meta.env.BASE_URL}media/`;

export const videos: VideoItem[] = [
  {
    id: 'heads-film', title: 'Heads', year: '2026', duration: 'Installation loop',
    caption: 'A site-responsive projection artwork created with a local digital art collective, blending digital graffiti with the physical landscape.',
    poster: media + 'projects/thin-film.svg', video: { type: 'local', src: media + 'videos/Heads.mp4' }, relatedProjectSlug: 'heads'
  },
  {
    id: 'the-swarm-film', title: 'The Swarm', year: '2024', duration: 'Installation loop',
    caption: 'A digital installation simulating the collective motion of 50,000 individual points.',
    poster: media + 'projects/magnetic-oscillator.svg', video: { type: 'local', src: media + 'videos/Swarm.mp4' }, relatedProjectSlug: 'the-swarm'
  },
  {
    id: 'orb-film', title: 'ORB', year: '2025', duration: 'Installation loop',
    caption: 'Layered biomimetic textures developed for a large-scale exhibition at Fabric, London.',
    poster: media + 'projects/hyperspectral.svg', video: { type: 'local', src: media + 'videos/ORB.mp4' }, relatedProjectSlug: 'orb'
  }
];
