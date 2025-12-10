import { useState } from 'react';

const DailyActivitiesPage = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [rotation, setRotation] = useState(0);

  const activities = [
    {
      id: 1,
      title: 'Дыхательная игра "Воздушный шар"',
      duration: '5 минут',
      icon: '🎈',
      description: 'Ребенок представляет, что он воздушный шар. На вдохе "надувается", на выдохе медленно "сдувается".',
      skills: ['Саморегуляция', 'Управление эмоциями', 'Концентрация'],
      parentTips: [
        'Делайте упражнение вместе с ребенком',
        'Используйте спокойный голос',
        'Хвалите за каждую попытку',
        'Можно использовать при стрессе или перед сном'
      ],
      color: '#FFB6C1'
    },
    {
      id: 2,
      title: 'Игра "Стоп-сигнал"',
      duration: '7 минут',
      icon: '🚦',
      description: 'Ребенок двигается под музыку. Когда музыка останавливается, нужно замереть как статуя.',
      skills: ['Самоконтроль', 'Внимание', 'Торможение импульсов'],
      parentTips: [
        'Меняйте темп музыки',
        'Сами участвуйте в игре',
        'Усложняйте: замирать в определенной позе',
        'Хвалите за выдержку и контроль'
      ],
      color: '#87CEEB'
    },
    {
      id: 3,
      title: '"Коробка эмоций"',
      duration: '10 минут',
      icon: '📦',
      description: 'Рисуем или находим картинки разных эмоций, складываем в коробку. Ребенок достает и показывает эмоцию.',
      skills: ['Эмоциональный интеллект', 'Распознавание эмоций', 'Экспрессия'],
      parentTips: [
        'Обсуждайте каждую эмоцию',
        'Спрашивайте, когда ребенок чувствовал это',
        'Показывайте свои эмоции тоже',
        'Создайте безопасное пространство для выражения'
      ],
      color: '#DDA0DD'
    },
    {
      id: 4,
      title: 'Игра "Черепаха и заяц"',
      duration: '8 минут',
      icon: '🐢',
      description: 'Ребенок двигается то быстро (как заяц), то медленно (как черепаха) по вашей команде.',
      skills: ['Регуляция темпа', 'Следование инструкциям', 'Гибкость'],
      parentTips: [
        'Меняйте команды неожиданно',
        'Добавляйте эмоции персонажей',
        'Поощряйте плавные переходы',
        'Обсуждайте разницу в ощущениях'
      ],
      color: '#98FB98'
    },
    {
      id: 5,
      title: '"Волшебный мешочек"',
      duration: '6 минут',
      icon: '🎒',
      description: 'В мешочек кладем разные предметы. Ребенок на ощупь угадывает, что это, не глядя.',
      skills: ['Концентрация', 'Терпение', 'Сенсорное развитие'],
      parentTips: [
        'Используйте разные текстуры',
        'Не торопите с ответом',
        'Хвалите за терпение',
        'Обсуждайте ощущения'
      ],
      color: '#FFD700'
    },
    {
      id: 6,
      title: 'Игра "Тихо-громко"',
      duration: '5 минут',
      icon: '🔊',
      description: 'Ребенок выполняет действия (хлопает, топает) то тихо, то громко по вашему сигналу.',
      skills: ['Модуляция поведения', 'Самоконтроль', 'Внимание'],
      parentTips: [
        'Используйте жесты для сигналов',
        'Добавляйте промежуточные уровни',
        'Меняйтесь ролями',
        'Хвалите за точность выполнения'
      ],
      color: '#FFA07A'
    },
    {
      id: 7,
      title: '"Зеркало эмоций"',
      duration: '7 минут',
      icon: '🪞',
      description: 'Родитель показывает эмоцию, ребенок повторяет как зеркало. Затем меняетесь ролями.',
      skills: ['Эмпатия', 'Распознавание эмоций', 'Невербальная коммуникация'],
      parentTips: [
        'Преувеличивайте выражения лица',
        'Обсуждайте каждую эмоцию',
        'Используйте фотографии для вдохновения',
        'Создайте игривую атмосферу'
      ],
      color: '#E6E6FA'
    },
    {
      id: 8,
      title: 'Игра "Камень, ножницы, бумага+"',
      duration: '8 минут',
      icon: '✊',
      description: 'Классическая игра, но после каждого раунда обсуждаем: что чувствовал при выигрыше/проигрыше.',
      skills: ['Управление разочарованием', 'Спортивное поведение', 'Эмоциональная осознанность'],
      parentTips: [
        'Проигрывайте иногда специально',
        'Показывайте, как справляться с проигрышем',
        'Хвалите за честную игру',
        'Обсуждайте стратегии и эмоции'
      ],
      color: '#F0E68C'
    }
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSelectedActivity(null);
    
    // Random rotation between 1440 and 2160 degrees (4-6 full spins)
    const randomRotation = 1440 + Math.random() * 720;
    const finalRotation = rotation + randomRotation;
    setRotation(finalRotation);
    
    // Calculate which activity was selected
    setTimeout(() => {
      const normalizedRotation = finalRotation % 360;
      const segmentAngle = 360 / activities.length;
      const selectedIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % activities.length;
      setSelectedActivity(activities[selectedIndex]);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <main className="content-wrapper">
      {/* Hero Section */}
      <section className="content-block blockstyle-vibrant">
        <div className="content-container">
          <h1 className="content-h1">Ежедневные уроки</h1>
          <p className="content-paragraph">
            Крутите рулетку и получайте игру на 5-10 минут для развития эмоциональной регуляции вашего ребенка
          </p>
        </div>
      </section>

      {/* Roulette Section */}
      <section className="content-block">
        <div className="content-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {!selectedActivity ? (
            <div style={{ textAlign: 'center' }}>
              {/* Roulette Wheel */}
              <div style={{
                position: 'relative',
                width: '400px',
                height: '400px',
                margin: '0 auto 3rem',
                maxWidth: '90vw',
                aspectRatio: '1',
              }}>
                {/* Pointer */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '20px solid transparent',
                  borderRight: '20px solid transparent',
                  borderTop: '40px solid var(--accent-color)',
                  zIndex: 10,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                }}></div>

                {/* Wheel */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '8px solid var(--accent-color)',
                  boxShadow: 'var(--shadow-lg), inset 0 0 30px rgba(0,0,0,0.1)',
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
                  background: `conic-gradient(
                    ${activities.map((act, i) => {
                      const start = (i / activities.length) * 360;
                      const end = ((i + 1) / activities.length) * 360;
                      return `${act.color} ${start}deg ${end}deg`;
                    }).join(', ')}
                  )`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  {/* Center Circle */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--accent-gradient)',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'white',
                    zIndex: 5,
                  }}>
                    🎯
                  </div>

                  {/* Activity Icons */}
                  {activities.map((activity, index) => {
                    const angle = (index * 360) / activities.length + (360 / activities.length / 2);
                    const radian = (angle * Math.PI) / 180;
                    const radius = 140;
                    const x = Math.cos(radian) * radius;
                    const y = Math.sin(radian) * radius;
                    
                    return (
                      <div
                        key={activity.id}
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-rotation}deg)`,
                          fontSize: '2rem',
                          transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                        }}
                      >
                        {activity.icon}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Spin Button */}
              <button
                onClick={spinWheel}
                disabled={isSpinning}
                style={{
                  padding: '1.5rem 3rem',
                  background: isSpinning ? 'var(--text-light)' : 'var(--gradient-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-xl)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  cursor: isSpinning ? 'not-allowed' : 'pointer',
                  boxShadow: 'var(--shadow-lg)',
                  transition: 'var(--transition)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={(e) => {
                  if (!isSpinning) {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = 'var(--shadow-glow)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSpinning) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'var(--shadow-lg)';
                  }
                }}
              >
                {isSpinning ? '🎲 Крутим...' : '🎲 Крутить рулетку!'}
              </button>
            </div>
          ) : (
            /* Activity Details */
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              boxShadow: 'var(--shadow-lg)',
              border: `4px solid ${selectedActivity.color}`,
              animation: 'fadeIn 0.5s ease',
            }}>
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>
                  {selectedActivity.icon}
                </div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  {selectedActivity.title}
                </h2>
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  background: selectedActivity.color,
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                }}>
                  ⏱️ {selectedActivity.duration}
                </div>
              </div>

              {/* Description */}
              <div style={{
                background: 'var(--bg-section)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem',
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--accent-color)',
                  marginBottom: '0.75rem',
                }}>
                  Как играть:
                </h3>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-primary)',
                  lineHeight: '1.7',
                }}>
                  {selectedActivity.description}
                </p>
              </div>

              {/* Skills */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--accent-color)',
                  marginBottom: '1rem',
                }}>
                  Развиваемые навыки:
                </h3>
                <div style={{
                  display: 'flex',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                }}>
                  {selectedActivity.skills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.625rem 1.25rem',
                        background: 'var(--bg-overlay)',
                        border: '2px solid var(--accent-color)',
                        borderRadius: '100px',
                        fontSize: '0.9375rem',
                        fontWeight: '600',
                        color: 'var(--accent-color)',
                      }}
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Parent Tips */}
              <div style={{
                background: 'var(--bg-overlay)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem',
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--accent-color)',
                  marginBottom: '1rem',
                }}>
                  💡 Советы для родителей:
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}>
                  {selectedActivity.parentTips.map((tip, index) => (
                    <li
                      key={index}
                      style={{
                        fontSize: '1rem',
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem',
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        lineHeight: '1.6',
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        color: 'var(--accent-color)',
                        fontWeight: '700',
                      }}>
                        •
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => {
                    setSelectedActivity(null);
                    setRotation(0);
                  }}
                  className="cta-button primary"
                >
                  Выбрать другую игру
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default DailyActivitiesPage;

