import { Link } from 'react-router-dom';
import logoImage from '../../LOGO-orange.png';

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      className={`logo ${inverse ? 'logo--inverse' : ''}`}
      to="/"
      aria-label="Devine Devine, home"
    >
      <img src={logoImage} alt="" />
      <img src={logoImage} alt="" aria-hidden="true" />
      <img src={logoImage} alt="" aria-hidden="true" />
    </Link>
  );
}
