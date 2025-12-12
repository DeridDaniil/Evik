import { useState } from 'react';
import './DailyActivitiesPage.css';

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
      // Pointer is at the top (0 degrees), so we calculate from there
      // Add half segment to align with center of segment
      const adjustedRotation = (normalizedRotation + (segmentAngle / 2)) % 360;
      const selectedIndex = Math.floor(adjustedRotation / segmentAngle) % activities.length;
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
            <div className="roulette-container">
              {/* Roulette Wheel */}
              <div className="roulette-wheel-wrapper">
                {/* Pointer */}
                <div className="roulette-pointer"></div>

                {/* Wheel */}
                <div
                  className="roulette-wheel"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
                    background: `conic-gradient(
                      ${activities.map((act, i) => {
                      const start = (i / activities.length) * 360;
                      const end = ((i + 1) / activities.length) * 360;
                      return `${act.color} ${start}deg ${end}deg`;
                    }).join(', ')}
                    )`,
                  }}
                >
                  {/* Center Circle */}
                  <div className="roulette-center">
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
                        className="roulette-icon"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-rotation}deg)`,
                          transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
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
                className="roulette-spin-button"
              >
                {isSpinning ? '🎲 Крутим...' : '🎲 Крутить рулетку!'}
              </button>
            </div>
          ) : (
            /* Activity Details */
            <div
              className="activity-card"
              style={{ border: `4px solid ${selectedActivity.color}` }}
            >
              {/* Header */}
              <div className="activity-header">
                <div className="activity-icon">
                  {selectedActivity.icon}
                </div>
                <h2 className="activity-title">
                  {selectedActivity.title}
                </h2>
                <div
                  className="activity-duration"
                  style={{ background: selectedActivity.color }}
                >
                  ⏱️ {selectedActivity.duration}
                </div>
              </div>

              {/* Description */}
              <div className="activity-description-box">
                <h3 className="activity-section-title">
                  Как играть:
                </h3>
                <p className="activity-description-text">
                  {selectedActivity.description}
                </p>
              </div>

              {/* Skills */}
              <div className="activity-skills">
                <h3 className="activity-section-title">
                  Развиваемые навыки:
                </h3>
                <div className="activity-skills-list">
                  {selectedActivity.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="activity-skill-tag"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Parent Tips */}
              <div className="activity-tips-box">
                <h3 className="activity-section-title">
                  💡 Советы для родителей:
                </h3>
                <ul className="activity-tips-list">
                  {selectedActivity.parentTips.map((tip, index) => (
                    <li
                      key={index}
                      className="activity-tip-item"
                    >
                      <span className="activity-tip-bullet">
                        •
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="activity-actions">
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

