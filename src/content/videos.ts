import type { VideoItem } from '../types/content';

const media = `${import.meta.env.BASE_URL}media/`;

export const videos: VideoItem[] = [
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
