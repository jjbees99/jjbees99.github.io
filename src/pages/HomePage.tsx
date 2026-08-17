import { Link } from 'react-router-dom';
import { projects } from '../content/projects';
import { siteConfig } from '../content/siteConfig';
import { ProjectPreview } from '../components/ProjectPreview';
import { VinylPlayer } from '../components/VinylPlayer';

export function HomePage() {
  const featuredSlugs = ['optoblock', 'the-swarm', 'real-time-patellar-tracking'];
  const featuredProjects = featuredSlugs.flatMap((slug) => projects.filter((project) => project.slug === slug));

  return <main id="main" className="home">
    <section className="hero">
      <p className="eyebrow">Jacob Beeson / Builder / Bioengineer</p>
      <div className="hero-name"><h1><span>WELCOME TO THE</span><span>DEVINE DEVINE</span></h1></div>
      <div className="hero-player-row">
        <div className="hero-player-copy">
          <p className="hero-intro">{siteConfig.introduction}</p>
          <p className="hero-player-note">Sound on / Needle down</p>
        </div>
        <VinylPlayer />
      </div>
      <div className="hero-baseline"><span /><span>Research tools · Prototypes · Art</span><span>{siteConfig.location}</span></div>
      <a className="scroll-cue" href="#selected">↓ Scroll to work</a>
    </section>
    <section id="selected" className="selected">
      <div className="section-heading"><p>Selected work / 01—03</p><h2>Ideas become instruments.</h2><Link to="/projects">All projects ↗</Link></div>
      {featuredProjects.map((project, index) => <ProjectPreview key={project.slug} project={project} index={index} />)}
    </section>
  </main>;
}
