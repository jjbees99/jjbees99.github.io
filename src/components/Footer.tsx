import { Link } from 'react-router-dom';
import { siteConfig } from '../content/siteConfig';
import logoImage from '../../LOGO-orange.png';

export function Footer(){return <footer><Link className="footer-logo" to="/" aria-label="Devine Devine, home"><img src={logoImage} alt="" /></Link><div className="footer-row"><span>{siteConfig.footerText}</span><nav aria-label="Footer"><Link to="/projects">Projects</Link><Link to="/about">About</Link><a href={`mailto:${siteConfig.email}`}>Email</a></nav><span>© {siteConfig.copyrightYear}</span></div></footer>}
