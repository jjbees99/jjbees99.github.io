import { useEffect, useRef } from 'react';
import type { Project } from '../types/content';

export function ProjectMedia({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isLocalVideo = project.video?.type === 'local';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }, { threshold: 0.35 });

    observer.observe(video);
    return () => observer.disconnect();
  }, [isLocalVideo]);

  return (
    <div className="project-media">
      {isLocalVideo ? (
        <video
          ref={videoRef}
          src={project.video?.src}
          poster={project.video?.poster ?? project.coverImage}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title} project preview`}
        />
      ) : (
        <img src={project.coverImage} alt={`Abstract diagram for ${project.title}`} loading="lazy" />
      )}
    </div>
  );
}
