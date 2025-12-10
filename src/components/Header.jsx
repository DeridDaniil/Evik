import { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="header-logo" onClick={closeMenu}>
            <span className="logo-text">ЭмоРегуляция</span>
            <span className="logo-subtitle">Для родителей дошкольников</span>
          </Link>

          <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li>
                <NavLink to="/" className="nav-link" onClick={closeMenu}>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to="/library" className="nav-link" onClick={closeMenu}>
                  Библиотека
                </NavLink>
              </li>
              <li>
                <NavLink to="/interactive" className="nav-link" onClick={closeMenu}>
                  Интерактив
                </NavLink>
              </li>
              <li>
                <NavLink to="/activities" className="nav-link" onClick={closeMenu}>
                  Уроки
                </NavLink>
              </li>
              <li>
                <NavLink to="/forum" className="nav-link" onClick={closeMenu}>
                  Форум
                </NavLink>
              </li>
              <li>
                <NavLink to="/for-parents" className="nav-link" onClick={closeMenu}>
                  Для родителей
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Header;