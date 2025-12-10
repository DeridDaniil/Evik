import { Link } from 'react-router';

const HomePage = () => {
  const features = [
    {
      id: 1,
      title: 'Библиотека знаний',
      description: 'Видеоматериалы от профессиональных психологов о развитии эмоциональной регуляции',
      icon: '📚',
      link: '/library',
      color: '#FFE5B4',
    },
    {
      id: 2,
      title: 'Составь историю',
      description: 'Интерактивный тренажер: выбирайте реакции и смотрите их влияние на ребенка',
      icon: '🎭',
      link: '/interactive',
      color: '#E0F7FA',
    },
    {
      id: 3,
      title: 'Ежедневные уроки',
      description: 'Рулетка с играми на 5-10 минут для развития саморегуляции',
      icon: '🎯',
      link: '/activities',
      color: '#FFD0D0',
    },
    {
      id: 4,
      title: 'Форум для родителей',
      description: 'Задавайте вопросы психологам и делитесь опытом с другими родителями',
      icon: '💬',
      link: '/forum',
      color: '#E6E6FA',
    },
  ];

  return (
    <main className="content-wrapper">
      {/* Hero Section */}
      <section className="content-block blockstyle-gradient">
        <div className="content-container">
          <h1 className="content-h1">
            Эмоциональная регуляция детей
          </h1>
          <p className="content-paragraph">
            Помогаем родителям развивать эмоциональный интеллект и навыки саморегуляции у детей дошкольного возраста
          </p>
          <div className="content-cta-buttons">
            <Link to="/library" className="cta-button primary">
              Начать обучение
            </Link>
            <Link to="/forum" className="cta-button secondary">
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="content-block">
        <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="content-h2">О проекте</h2>
          <p className="content-paragraph" style={{ margin: '0 auto' }}>
            Наш проект создан для родителей дошкольников и основан на научных исследованиях влияния родительского отношения на эмоциональную регуляцию детей. Мы предлагаем практические инструменты, видеоматериалы и поддержку профессиональных психологов.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-block blockstyle-card">
        <div className="content-container">
          <h2 className="content-h2">Возможности платформы</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
          }}>
            {features.map(feature => (
              <Link
                key={feature.id}
                to={feature.link}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  border: '2px solid var(--border-color)',
                  transition: 'var(--transition)',
                  textDecoration: 'none',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--accent-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: feature.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem',
                  margin: '0 auto 1.5rem',
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  textAlign: 'center',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  textAlign: 'center',
                }}>
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="content-block blockstyle-accent">
        <div className="content-container">
          <h2 className="content-h2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Почему это важно?
          </h2>
          <div className="content-list-large">
            <div className="list-item">
              <div className="list-item-icon">🧠</div>
              <div className="list-item-content">
                <h3 className="list-item-title">Развитие эмоционального интеллекта</h3>
                <p className="list-item-description">
                  Дети учатся понимать и управлять своими эмоциями, что критически важно для успешной социализации
                </p>
              </div>
            </div>
            <div className="list-item">
              <div className="list-item-icon">🤝</div>
              <div className="list-item-content">
                <h3 className="list-item-title">Улучшение отношений</h3>
                <p className="list-item-description">
                  Правильное родительское отношение укрепляет связь с ребенком и создает атмосферу доверия
                </p>
              </div>
            </div>
            <div className="list-item">
              <div className="list-item-icon">⚖️</div>
              <div className="list-item-content">
                <h3 className="list-item-title">Саморегуляция</h3>
                <p className="list-item-description">
                  Навыки контроля импульсов и эмоций помогают ребенку справляться со стрессом и адаптироваться
                </p>
              </div>
            </div>
            <div className="list-item">
              <div className="list-item-icon">🌟</div>
              <div className="list-item-content">
                <h3 className="list-item-title">Будущий успех</h3>
                <p className="list-item-description">
                  Эмоциональная регуляция в детстве закладывает фундамент для успешной взрослой жизни
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-block">
        <div className="content-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="content-h2">Начните прямо сейчас</h2>
          <p className="content-paragraph" style={{ margin: '0 auto 2rem' }}>
            Присоединяйтесь к сообществу осознанных родителей и получите доступ ко всем материалам и поддержке психологов
          </p>
          <div className="content-cta-buttons">
            <Link to="/library" className="cta-button primary">
              Перейти к материалам
            </Link>
            <Link to="/interactive" className="cta-button secondary">
              Попробовать интерактив
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;