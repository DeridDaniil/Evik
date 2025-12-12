import { useState } from 'react';
import './VideoLibraryPage.css';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import image7 from '../assets/images/7.jpg';
import image8 from '../assets/images/8.jpg';

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
      thumbnail: image1,
    },
    {
      id: 2,
      title: 'Установление здоровых границ',
      category: 'границы',
      duration: '15:45',
      description: 'Как говорить "нет" без чувства вины',
      thumbnail: image2,
    },
    {
      id: 3,
      title: 'Правильная похвала: что работает',
      category: 'похвала',
      duration: '10:20',
      description: 'Как хвалить ребенка, чтобы развивать внутреннюю мотивацию',
      thumbnail: image3,
    },
    {
      id: 4,
      title: 'Работа с детскими истериками',
      category: 'успокоение',
      duration: '18:15',
      description: 'Пошаговая инструкция для родителей',
      thumbnail: image4,
    },
    {
      id: 5,
      title: 'Эмоциональная грамотность для детей',
      category: 'эмоции',
      duration: '14:00',
      description: 'Учим ребенка понимать и выражать свои чувства',
      thumbnail: image5,
    },
    {
      id: 6,
      title: 'Игры для развития саморегуляции',
      category: 'игры',
      duration: '16:30',
      description: 'Практические упражнения на каждый день',
      thumbnail: image6,
    },
    {
      id: 7,
      title: 'Границы в общении с другими детьми',
      category: 'границы',
      duration: '13:25',
      description: 'Как научить ребенка защищать личное пространство',
      thumbnail: image7,
    },
    {
      id: 8,
      title: 'Похвала vs критика: баланс',
      category: 'похвала',
      duration: '11:40',
      description: 'Конструктивная обратная связь для дошкольников',
      thumbnail: image8,
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
          <div className="video-library-categories">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`video-library-category-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                <span className="video-library-category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="video-library-grid">
            {filteredVideos.map(video => (
              <div key={video.id} className="video-library-card">
                {/* Thumbnail */}
                <div className="video-library-thumbnail">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={`video-library-thumbnail-img ${video.id === 4 ? 'video-thumbnail-top' : ''}`}
                  />
                  <div className="video-library-duration">
                    {video.duration}
                  </div>
                  {/* Play Button */}
                  <div className="video-library-play-btn">
                    ▶
                  </div>
                </div>

                {/* Content */}
                <div className="video-library-content">
                  <h3 className="video-library-title">
                    {video.title}
                  </h3>
                  <p className="video-library-description">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Resources Section */}
      <section className="content-block" style={{ background: 'var(--bg-light)' }}>
        <div className="content-container">
          <h2 className="content-h2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Рекомендованные книги и ресурсы
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.125rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Небольшая подборка современных и доступных источников для родителей
          </p>

          <div className="resources-grid">
            {/* Books Section */}
            <div className="resource-card">
              <div className="resource-icon">📚</div>
              <h3 className="resource-title">Книги</h3>
              <ul className="resource-list">
                <li>
                  <strong>Готтман Джон</strong><br />
                  «Эмоциональный интеллект ребенка»
                </li>
                <li>
                  <strong>Юлия Гиппенрейтер</strong><br />
                  «Общаться с ребенком. Как?»
                </li>
                <li>
                  <strong>Виктория Шиманская, Александра Чканикова</strong><br />
                  «Детские страхи»
                </li>
                <li>
                  <strong>Людмила Петрановская</strong><br />
                  «Тайная опора: привязанность в жизни ребенка»
                </li>
                <li>
                  <strong>Франсуаза Дольто</strong><br />
                  «На стороне ребенка»
                </li>
              </ul>
            </div>

            {/* Online Resources Section */}
            <div className="resource-card">
              <div className="resource-icon">🌐</div>
              <h3 className="resource-title">Онлайн-ресурсы</h3>
              <ul className="resource-list">
                <li>Подкасты по возрастной / детской психологии</li>
                <li>Методические рекомендации Российского общества детских психологов</li>
                <li>Вебинары ВОЗ по поддержке психического здоровья родителей и детей</li>
              </ul>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 className="resource-subtitle">Материалы по навыкам саморегуляции:</h4>
                <ul className="resource-list">
                  <li>Шпаргалки по техникам эмоционального коучинга</li>
                  <li>Список спокойных игр для детей от 3-х лет</li>
                </ul>
              </div>
            </div>

            {/* Audio Guides Section */}
            <div className="resource-card">
              <div className="resource-icon">🎧</div>
              <h3 className="resource-title">Аудио-гайды для родителей</h3>
              <p className="resource-description">
                Короткие записи, которые помогут в сложных моментах:
              </p>
              <ul className="resource-list">
                <li>«Как говорить успокаивающим тоном»</li>
                <li>«Как поддержать ребенка в момент истерики»</li>
                <li>«Двухминутная техника восстановления для родителей»</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoLibraryPage;

