import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">ЭмоРегуляция</span>
              <span className="logo-subtitle">Для родителей дошкольников</span>
            </Link>
            <p className="footer-description">
              Научно обоснованные методы развития эмоциональной регуляции у детей дошкольного возраста. 
              Поддержка профессиональных психологов и сообщество осознанных родителей.
            </p>
            <div className="footer-badges">
              <span className="badge-item">🎓 Научный подход</span>
              <span className="badge-item">👨‍⚕️ Психологи</span>
              <span className="badge-item">👨‍👩‍👧 Для родителей</span>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Навигация</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Главная</Link></li>
              <li><Link to="/library" className="footer-link">Библиотека знаний</Link></li>
              <li><Link to="/interactive" className="footer-link">Составь историю</Link></li>
              <li><Link to="/activities" className="footer-link">Ежедневные уроки</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Сообщество</h4>
            <ul className="footer-links">
              <li><Link to="/forum" className="footer-link">Форум</Link></li>
              <li><a href="#" className="footer-link">О проекте</a></li>
              <li><a href="#" className="footer-link">Наши психологи</a></li>
              <li><a href="#" className="footer-link">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Информация</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Политика конфиденциальности</a></li>
              <li><a href="#" className="footer-link">Пользовательское соглашение</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Поддержка</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 ЭмоРегуляция. Все права защищены.
            </p>
            <div className="footer-payment">
              <span className="payment-text">Сделано с ❤️ для родителей</span>
            </div>
          </div>
          <div className="footer-disclaimer">
            Информация на сайте носит образовательный характер и не заменяет консультацию специалиста. 
            При серьезных проблемах обратитесь к квалифицированному психологу.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;