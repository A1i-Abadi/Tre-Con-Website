import { useState, useEffect } from 'react';
import './Navbar.scss';

const navLinks = [
  { label: 'System', href: '#features' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Report', href: '#report' },
  { label: 'Preview', href: '#report-preview' },
  { label: 'Advisors', href: '#doctors' },
  { label: 'Team', href: '#team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">Tre-Con</a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          id="nav-toggle"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__mobile ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
