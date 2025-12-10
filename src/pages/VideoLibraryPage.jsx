import { useState } from 'react';

const VideoLibraryPage = () => {
  const [activeCategory, setActiveCategory] = useState('все');

  const categories = [
    { id: 'все', name: 'Все видео', icon: '📚' },
    { id: 'успокоение', name: 'Успокоение', icon: '🌸' },
    { id: 'границы', name: 'Границы', icon: '🛡️' },
    { id: 'похвала', name: 'Похвала', icon: '⭐' },
    { id: 'эмоции', name: 'Эмоции', icon: '💝' },
    { id: 'игры', name: 'Игры', icon: '🎨' },
  ];

  const videos = [
    {
      id: 1,
      title: 'Как успокоить ребенка перед сном',
      category: 'успокоение',
      duration: '12:30',
      description: 'Техники и методы для спокойного засыпания дошкольника',
      thumbnail: '🌙',
    },
    {
      id: 2,
      title: 'Установление здоровых границ',
      category: 'границы',
      duration: '15:45',
      description: 'Как говорить "нет" без чувства вины',
      thumbnail: '🚪',
    },
    {
      id: 3,
      title: 'Правильная похвала: что работает',
      category: 'похвала',
      duration: '10:20',
      description: 'Как хвалить ребенка, чтобы развивать внутреннюю мотивацию',
      thumbnail: '🌟',
    },
    {
      id: 4,
      title: 'Работа с детскими истериками',
      category: 'успокоение',
      duration: '18:15',
      description: 'Пошаговая инструкция для родителей',
      thumbnail: '🌊',
    },
    {
      id: 5,
      title: 'Эмоциональная грамотность для детей',
      category: 'эмоции',
      duration: '14:00',
      description: 'Учим ребенка понимать и выражать свои чувства',
      thumbnail: '❤️',
    },
    {
      id: 6,
      title: 'Игры для развития саморегуляции',
      category: 'игры',
      duration: '16:30',
      description: 'Практические упражнения на каждый день',
      thumbnail: '🎮',
    },
    {
      id: 7,
      title: 'Границы в общении с другими детьми',
      category: 'границы',
      duration: '13:25',
      description: 'Как научить ребенка защищать личное пространство',
      thumbnail: '👥',
    },
    {
      id: 8,
      title: 'Похвала vs критика: баланс',
      category: 'похвала',
      duration: '11:40',
      description: 'Конструктивная обратная связь для дошкольников',
      thumbnail: '⚖️',
    },
  ];

  const filteredVideos = activeCategory === 'все' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <main className="content-wrapper">
      {/* Hero Section */}
      <section className="content-block blockstyle-gradient">
        <div className="content-container">
          <h1 className="content-h1">Библиотека знаний</h1>
          <p className="content-paragraph">
            Видеоматериалы от профессиональных психологов для развития эмоциональной регуляции у детей дошкольного возраста
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="content-block">
        <div className="content-container">
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            marginBottom: '3rem' 
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  padding: '0.875rem 1.75rem',
                  background: activeCategory === category.id 
                    ? 'var(--accent-gradient)' 
                    : 'var(--bg-card)',
                  color: activeCategory === category.id 
                    ? 'var(--text-on-accent)' 
                    : 'var(--text-secondary)',
                  border: activeCategory === category.id 
                    ? 'none' 
                    : '2px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  boxShadow: activeCategory === category.id 
                    ? 'var(--shadow-md)' 
                    : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.borderColor = 'var(--accent-color)';
                    e.target.style.color = 'var(--accent-color)';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}>
            {filteredVideos.map(video => (
              <div
                key={video.id}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  transition: 'var(--transition)',
                  cursor: 'pointer',
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
                {/* Thumbnail */}
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, var(--bg-section) 0%, var(--bg-overlay) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  position: 'relative',
                }}>
                  {video.thumbnail}
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: 'rgba(0, 0, 0, 0.75)',
                    color: 'white',
                    padding: '0.375rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                  }}>
                    {video.duration}
                  </div>
                  {/* Play Button */}
                  <div style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    background: 'var(--accent-gradient)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'white',
                    boxShadow: 'var(--shadow-md)',
                  }}>
                    ▶
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: '1.4',
                  }}>
                    {video.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                  }}>
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoLibraryPage;

