import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { siteConfig } from '../content/siteConfig';

interface HeaderProps { onMenu: () => void }

export const Header = forwardRef<HTMLButtonElement, HeaderProps>(function Header({ onMenu }, ref) {
  return (
    <header className="site-header">
      <Logo />
      <nav className="header-nav" aria-label="Primary">
        {siteConfig.navigation.slice(1, 4).map((item) => (
          <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <a className="button ghost desktop-action" href={siteConfig.githubUrl}>GitHub</a>
        <NavLink className="button ghost contact-action" to="/contact">Contact</NavLink>
        <button ref={ref} className="button ghost" onClick={onMenu} aria-haspopup="dialog">Menu</button>
      </div>
    </header>
  );
});
