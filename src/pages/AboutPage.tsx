import { siteConfig } from '../content/siteConfig';
import '../styles/about.css';

const portraitUrl = `${import.meta.env.BASE_URL}media/placeholders/Profile%20picture.png`;

export function AboutPage() {
  return (
    <main id="main" className="about-page">
      <header className="page-title">
        <p>Profile / capabilities</p>
        <h1>ABOUT</h1>
      </header>

      <div className="about-lead">
        <img className="portrait-photo" src={portraitUrl} alt="Portrait of Jacob Beeson" />
        <p>
          I’m Jacob, a Molecular Bioengineering MEng student at Imperial College London. I build systems where software, sensors and physical prototypes meet—from experimental tools and wearable devices to computer vision, robotics and interactive digital work.
        </p>
      </div>

      <div className="about-sections">
        <section>
          <h2>Current work</h2>
          <p>
            I’m a research intern in magnetic sensor systems and nanorobotics at DKFZ and TU Dresden. I develop Python tools for data acquisition, signal generation, automation and analysis, and design experiments that integrate magnetic actuation with sensor readout.
          </p>
        </section>
        <section>
          <h2>Areas of interest</h2>
          <p>Bioengineering · Robotics · Wearable sensing · Experimental instrumentation · Computer vision · Signal processing · Biomimetics · Human-centred product design</p>
        </section>
        <section>
          <h2>Tools</h2>
          <p>Python · MATLAB · C++ / Arduino · Linux · SolidWorks · Fusion 360 · ANSYS FEA · Data acquisition · 3D printing · Microfabrication · Test automation</p>
        </section>
        <section>
          <h2>Experience</h2>
          <p>
            My work includes magnetic sensing and nanorobotics research in Dresden, wearable electrochemical sensing at ICIQ in Tarragona, and an MRI-compatible knee-loading device at Imperial. I also founded Optoblock and Sansoperator, and won first place at the Imperial CGCU Makeathon for a mountain-rescue wearable IoT device.
          </p>
        </section>
        <section>
          <h2>Education</h2>
          <p>
            MEng Molecular Bioengineering at Imperial College London, 2023–2027. My studies focus on applied programming, data analysis, mathematical modelling, sensor technology, biomimetics and engineering design.
          </p>
        </section>
        <section>
          <h2>Location</h2>
          <p>{siteConfig.location}</p>
          <a className="button solid" href={siteConfig.cvUrl}>Download CV ↘</a>
        </section>
      </div>
    </main>
  );
}
