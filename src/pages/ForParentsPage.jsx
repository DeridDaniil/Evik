import { useState, useEffect } from 'react';

const ForParentsPage = () => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showBurnoutTest, setShowBurnoutTest] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [showJournalEntries, setShowJournalEntries] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState(null);
  
  // Burnout test state
  const [burnoutAnswers, setBurnoutAnswers] = useState({
    energy: '',
    time: '',
    tiredness: '',
  });
  const [burnoutResult, setBurnoutResult] = useState(null);

  // Journal state
  const [journalEntry, setJournalEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState(() => {
    const saved = localStorage.getItem('journalEntries');
    return saved ? JSON.parse(saved) : [];
  });

  const practices = [
    {
      id: 1,
      category: 'Заземление',
      title: 'Техника 5-4-3-2-1',
      description: 'Быстрая практика для возвращения в настоящий момент',
      duration: '5 минут',
      icon: '🌿',
      content: 'Назовите 5 вещей, которые вы видите, 4 - которые слышите, 3 - которые можете потрогать, 2 - которые чувствуете запах, 1 - которую можете попробовать на вкус.',
    },
    {
      id: 2,
      category: 'Дыхание',
      title: 'Дыхание 4-7-8',
      description: 'Успокаивающая дыхательная практика',
      duration: '3 минуты',
      icon: '🌬️',
      content: 'Вдох на 4 счета, задержка на 7, выдох на 8. Повторите 4-5 раз. Эта техника активирует парасимпатическую нервную систему и помогает снизить тревожность.',
    },
    {
      id: 3,
      category: 'Телесные практики',
      title: 'Прогрессивная мышечная релаксация',
      description: 'Снятие физического напряжения',
      duration: '10 минут',
      icon: '💆',
      content: 'Последовательно напрягайте и расслабляйте группы мышц: лицо, шея, плечи, руки, живот, ноги. Напряжение - 5 секунд, расслабление - 10 секунд.',
    },
    {
      id: 4,
      category: 'Медитация',
      title: 'Медитация любящей доброты',
      description: 'Развитие сострадания к себе и другим',
      duration: '7 минут',
      icon: '💝',
      content: 'Повторяйте про себя: "Пусть я буду счастлив(а). Пусть я буду здоров(а). Пусть я буду в безопасности. Пусть я живу с легкостью." Затем направьте эти пожелания своему ребенку, близким.',
    },
    {
      id: 5,
      category: 'Рефлексия',
      title: 'Дневник благодарности',
      description: 'Практика осознанности и позитивного мышления',
      duration: '5 минут',
      icon: '📝',
      content: 'Запишите 3 вещи, за которые вы благодарны сегодня. Это могут быть самые простые моменты: улыбка ребенка, теплый чай, солнечный день.',
    },
    {
      id: 6,
      category: 'Самопознание',
      title: 'Колесо баланса',
      description: 'Оценка разных сфер жизни',
      duration: '15 минут',
      icon: '⚖️',
      content: 'Оцените по шкале от 1 до 10 свою удовлетворенность в сферах: здоровье, отношения, работа, отдых, личностный рост, финансы. Где самый низкий балл? Что можно сделать для улучшения?',
    },
  ];

  const burnoutRecommendations = {
    high: [
      {
        title: 'Тишина + 10 минут',
        description: 'Ссылка на аудио с звуками природы + идея выпить чай у окна',
        icon: '🍵',
      },
      {
        title: 'Движение + 20 минут',
        description: 'Короткий комплекс из 5 упражнений для снятия напряжения в шее и спине',
        icon: '🧘',
      },
      {
        title: 'Творчество + 15 минут',
        description: 'Просто рисуйте круги на листе, не отрывая руки',
        icon: '🎨',
      },
    ],
    medium: [
      {
        title: 'Прогулка + 15 минут',
        description: 'Выйдите на свежий воздух, даже если просто вокруг дома',
        icon: '🚶',
      },
      {
        title: 'Музыка + 5 минут',
        description: 'Включите любимую песню из юности на 3 минуты',
        icon: '🎵',
      },
      {
        title: 'Благодарность + 3 минуты',
        description: 'Вечером, лежа в кровати, мысленно поблагодарите себя за 1 маленькую победу сегодня',
        icon: '⭐',
      },
    ],
    low: [
      {
        title: 'Микро-пауза',
        description: 'Пока ребёнок смотрит мультик, умойтесь прохладной водой, представляя, что смываете напряжение',
        icon: '💧',
      },
      {
        title: 'Растяжка + 5 минут',
        description: 'Простые упражнения на растяжку прямо на месте',
        icon: '🤸',
      },
      {
        title: 'Дыхание + 2 минуты',
        description: 'Глубокое дыхание: 4 вдох, 7 задержка, 8 выдох',
        icon: '🌬️',
      },
    ],
  };

  const handleBurnoutTest = () => {
    // Simple logic to determine burnout level
    let score = 0;
    if (burnoutAnswers.energy === 'low') score += 2;
    if (burnoutAnswers.energy === 'medium') score += 1;
    if (burnoutAnswers.time === 'none') score += 2;
    if (burnoutAnswers.time === 'little') score += 1;
    if (burnoutAnswers.tiredness === 'very') score += 2;
    if (burnoutAnswers.tiredness === 'somewhat') score += 1;

    let level = 'low';
    if (score >= 5) level = 'high';
    else if (score >= 3) level = 'medium';

    setBurnoutResult({
      level,
      recommendations: burnoutRecommendations[level],
    });
  };

  const handleJournalSubmit = (e) => {
    e.preventDefault();
    
    if (!journalEntry.trim()) return;
    
    // Create new entry with timestamp
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      content: journalEntry,
    };

    // Save to state and localStorage
    const updatedEntries = [newEntry, ...journalEntries];
    setJournalEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

    // Reset form
    setJournalEntry('');
  };

  const handleDeleteEntry = (id) => {
    const updatedEntries = journalEntries.filter(entry => entry.id !== id);
    setJournalEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
  };

  // Block body scroll when modal is open
  useEffect(() => {
    const isModalOpen = showEmergencyModal || selectedPractice !== null || showJournalEntries;
    
    if (isModalOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Prevent touch scrolling on mobile
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [showEmergencyModal, selectedPractice, showJournalEntries]);

  // Handle Escape key to close modals
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (selectedPractice) {
          setSelectedPractice(null);
        } else if (showEmergencyModal) {
          setShowEmergencyModal(false);
        } else if (showJournalEntries) {
          setShowJournalEntries(false);
        }
      }
    };

    if (showEmergencyModal || selectedPractice || showJournalEntries) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [showEmergencyModal, selectedPractice, showJournalEntries]);

  return (
    <main className="content-wrapper">
      {/* Hero Section */}
      <section className="content-block blockstyle-gradient">
        <div className="content-container">
          <h1 className="content-h1">
            Забота о себе - забота о ребенке
          </h1>
          <p className="content-paragraph">
            Ресурсное состояние родителя - основа эмоционального благополучия ребенка. Здесь вы найдете инструменты для поддержки себя.
          </p>
        </div>
      </section>

      {/* Fixed Buttons Container */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 1000,
      }}>
        {/* Journal Button - Only show if there are entries */}
        {journalEntries.length > 0 && (
          <button
            onClick={() => setShowJournalEntries(true)}
            disabled={showEmergencyModal || selectedPractice !== null || showJournalEntries}
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: (showEmergencyModal || selectedPractice !== null || showJournalEntries) 
                ? 'rgba(138, 97, 255, 0.5)' 
                : 'linear-gradient(135deg, #8a61ff 0%, #7c4dff 100%)',
              border: 'none',
              boxShadow: '0 4px 20px rgba(138, 97, 255, 0.4)',
              cursor: (showEmergencyModal || selectedPractice !== null || showJournalEntries) ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              transition: 'all 0.3s ease',
              opacity: (showEmergencyModal || selectedPractice !== null || showJournalEntries) ? 0.5 : 1,
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              if (!showEmergencyModal && !selectedPractice && !showJournalEntries) {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 30px rgba(138, 97, 255, 0.6)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(138, 97, 255, 0.4)';
            }}
            title="Мои записи в дневнике"
          >
            📔
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              background: '#ff6b6b',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}>
              {journalEntries.length}
            </span>
          </button>
        )}

        {/* Emergency Button */}
        <button
          onClick={() => setShowEmergencyModal(true)}
          disabled={showEmergencyModal || selectedPractice !== null || showJournalEntries}
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: (showEmergencyModal || selectedPractice !== null || showJournalEntries) 
              ? 'rgba(255, 107, 107, 0.5)' 
              : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
            border: 'none',
            boxShadow: '0 4px 20px rgba(255, 107, 107, 0.4)',
            cursor: (showEmergencyModal || selectedPractice !== null || showJournalEntries) ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            transition: 'all 0.3s ease',
            opacity: (showEmergencyModal || selectedPractice !== null || showJournalEntries) ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (!showEmergencyModal && !selectedPractice && !showJournalEntries) {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 30px rgba(255, 107, 107, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 107, 107, 0.4)';
          }}
          title="Экстренная помощь"
        >
          🆘
        </button>
      </div>

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '1rem',
          overflow: 'auto',
        }}
        onClick={() => setShowEmergencyModal(false)}
        onTouchMove={(e) => e.preventDefault()}
        >
          <div style={{
            background: '#fff',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            maxWidth: '600px',
            width: '100%',
            boxShadow: 'var(--shadow-lg)',
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              textAlign: 'center',
            }}>
              Экстренная поддержка
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}>
              Мы понимаем, что иногда нужна срочная помощь. Сейчас важно восстановить ваше состояние.
            </p>
            
            <div style={{
              background: 'var(--bg-section)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}>
                Прямо сейчас:
              </h3>
              <ol style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                paddingLeft: '1.5rem',
              }}>
                <li>Сделайте 3 глубоких вдоха и выдоха</li>
                <li>Если возможно, выйдите в другую комнату</li>
                <li>Умойтесь холодной водой</li>
                <li>Напомните себе: "Я справлюсь. Это временно."</li>
              </ol>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <button
                className="cta-button primary"
                style={{ width: '100%' }}
              >
                📞 Связаться с психологом (15 мин)
              </button>
              <button
                className="cta-button secondary"
                style={{ width: '100%' }}
                onClick={() => {
                  setShowEmergencyModal(false);
                  document.getElementById('practices')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                🌿 Быстрые практики успокоения
              </button>
              <button
                onClick={() => setShowEmergencyModal(false)}
                style={{
                  padding: '0.75rem',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-light)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Practices Section */}
      <section id="practices" className="content-block">
        <div className="content-container">
          <h2 className="content-h2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Практики для восстановления
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
          }}>
            Медитации, дыхательные и телесные практики, психологические задания для самопознания и рефлексии
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {practices.map(practice => (
              <div
                key={practice.id}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedPractice(practice)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--accent-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  textAlign: 'center',
                  marginBottom: '1rem',
                }}>
                  {practice.icon}
                </div>
                <div style={{
                  display: 'inline-block',
                  padding: '0.375rem 0.875rem',
                  background: 'var(--bg-overlay)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  color: 'var(--accent-color)',
                  marginBottom: '0.75rem',
                }}>
                  {practice.category}
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  {practice.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '0.75rem',
                }}>
                  {practice.description}
                </p>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  ⏱️ {practice.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Detail Modal */}
      {selectedPractice && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '1rem',
          overflow: 'auto',
        }}
        onClick={() => setSelectedPractice(null)}
        onTouchMove={(e) => e.preventDefault()}
        >
          <div style={{
            background: '#fff',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            maxWidth: '700px',
            width: '100%',
            boxShadow: 'var(--shadow-lg)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>
              {selectedPractice.icon}
            </div>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              textAlign: 'center',
            }}>
              {selectedPractice.title}
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              textAlign: 'center',
              marginBottom: '2rem',
            }}>
              {selectedPractice.category} • {selectedPractice.duration}
            </p>
            <div style={{
              background: 'var(--bg-section)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}>
              <p style={{
                fontSize: '1.0625rem',
                color: 'var(--text-primary)',
                lineHeight: '1.8',
              }}>
                {selectedPractice.content}
              </p>
            </div>
            <button
              onClick={() => setSelectedPractice(null)}
              className="cta-button secondary"
              style={{ width: '100%' }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Burnout Prevention Section */}
      <section className="content-block blockstyle-soft">
        <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="content-h2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Профилактика выгорания
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: '2rem',
          }}>
            Пройдите короткий тест и получите персонализированные рекомендации для восстановления
          </p>

          {!burnoutResult && (
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '2rem',
                textAlign: 'center',
              }}>
                Ответьте на несколько вопросов
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  Что вам обычно даёт сил?
                </label>
                <select
                  value={burnoutAnswers.energy}
                  onChange={(e) => setBurnoutAnswers({...burnoutAnswers, energy: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    fontSize: '1rem',
                    border: '2px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-body)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="">Выберите ответ</option>
                  <option value="high">У меня много источников энергии</option>
                  <option value="medium">Есть несколько вещей, которые помогают</option>
                  <option value="low">Сейчас ничего не помогает</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  Сколько времени у вас сегодня есть на себя?
                </label>
                <select
                  value={burnoutAnswers.time}
                  onChange={(e) => setBurnoutAnswers({...burnoutAnswers, time: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    fontSize: '1rem',
                    border: '2px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-body)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="">Выберите ответ</option>
                  <option value="enough">Больше 30 минут</option>
                  <option value="little">10-30 минут</option>
                  <option value="none">Меньше 10 минут или совсем нет</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  Насколько уставшим вы себя ощущаете?
                </label>
                <select
                  value={burnoutAnswers.tiredness}
                  onChange={(e) => setBurnoutAnswers({...burnoutAnswers, tiredness: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    fontSize: '1rem',
                    border: '2px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-body)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="">Выберите ответ</option>
                  <option value="ok">Чувствую себя нормально</option>
                  <option value="somewhat">Немного устал(а)</option>
                  <option value="very">Очень устал(а), на грани</option>
                </select>
              </div>

              <button
                onClick={handleBurnoutTest}
                className="cta-button primary"
                style={{ width: '100%' }}
                disabled={!burnoutAnswers.energy || !burnoutAnswers.time || !burnoutAnswers.tiredness}
              >
                Получить рекомендации
              </button>
            </div>
          )}

          {burnoutResult && (
            <>
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '2px solid var(--accent-color)',
              boxShadow: 'var(--shadow-md)',
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                textAlign: 'center',
              }}>
                Ваши персонализированные рекомендации
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                marginBottom: '2rem',
              }}>
                {burnoutResult.level === 'high' && 'Похоже, вам нужен серьезный отдых. Вот что может помочь:'}
                {burnoutResult.level === 'medium' && 'Вы на правильном пути, но стоит позаботиться о себе:'}
                {burnoutResult.level === 'low' && 'Отличная работа! Продолжайте заботиться о себе:'}
              </p>

              <div style={{
                display: 'grid',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}>
                {burnoutResult.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'var(--bg-section)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div style={{ fontSize: '2.5rem' }}>{rec.icon}</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                      }}>
                        {rec.title}
                      </h4>
                      <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                      }}>
                        {rec.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setBurnoutResult(null);
                  setBurnoutAnswers({ energy: '', time: '', tiredness: '' });
                }}
                className="cta-button secondary"
                style={{ width: '100%' }}
              >
                Пройти тест заново
              </button>
            </div>
            </>
          )}
        </div>
      </section>

      {/* Journal Section */}
      <section className="content-block">
        <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="content-h2" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Личный дневник
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            marginBottom: '2rem',
          }}>
            Записывайте свои мысли, эмоции и наблюдения. Все записи сохраняются только у вас.
          </p>

          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <form onSubmit={handleJournalSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <textarea
                  value={journalEntry}
                  onChange={(e) => setJournalEntry(e.target.value)}
                  placeholder="Напишите о том, что произошло сегодня, как вы себя чувствуете..."
                  rows="8"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    border: '2px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-body)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    lineHeight: '1.6',
                  }}
                />
              </div>

              <div style={{
                background: 'var(--bg-section)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  Вопросы, которые помогут вам описать своё состояние:
                </h4>
                <ul style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  paddingLeft: '1.5rem',
                  listStyle: 'disc',
                }}>
                  <li>Что произошло сегодня? Какая ситуация вызвала у вас сильные эмоции?</li>
                  <li>Что именно вас тригернуло? Какой момент стал переломным?</li>
                  <li>Какие эмоции вы испытали? (злость, грусть, страх, вина, стыд...)</li>
                  <li>Как реагировало ваше тело? (напряжение, учащенное сердцебиение, слезы...)</li>
                  <li>Что это вам напомнило? Были ли похожие ситуации в прошлом?</li>
                  <li>Как вы отреагировали? Что сказали или сделали?</li>
                  <li>Что бы вы хотели сделать по-другому в следующий раз?</li>
                  <li>Что вам сейчас нужно для восстановления?</li>
                </ul>
              </div>

              <button
                type="submit"
                className="cta-button primary"
                style={{ width: '100%' }}
                disabled={!journalEntry.trim()}
              >
                💾 Сохранить запись
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Journal Entries Modal */}
      {showJournalEntries && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '1rem',
          overflow: 'auto',
        }}
        onClick={() => setShowJournalEntries(false)}
        onTouchMove={(e) => e.preventDefault()}
        >
          <div style={{
            background: '#fff',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            maxWidth: '900px',
            width: '100%',
            boxShadow: 'var(--shadow-lg)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              textAlign: 'center',
            }}>
              Мои записи в дневнике
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              textAlign: 'center',
              marginBottom: '2rem',
            }}>
              Всего записей: {journalEntries.length}
            </p>

            {journalEntries.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                color: 'var(--text-secondary)',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📔</div>
                <p>У вас пока нет записей в дневнике</p>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                {journalEntries.map((entry) => (
                  <div
                    key={entry.id}
                    style={{
                      background: 'var(--bg-section)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem',
                    }}>
                      <div style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-light)',
                      }}>
                        📅 {entry.date}
                      </div>
                      <button
                        onClick={() => {
                          if (window.confirm('Удалить эту запись?')) {
                            handleDeleteEntry(entry.id);
                          }
                        }}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#ff6b6b',
                          cursor: 'pointer',
                          fontSize: '1.25rem',
                          padding: '0',
                          lineHeight: 1,
                        }}
                        title="Удалить запись"
                      >
                        🗑️
                      </button>
                    </div>

                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      lineHeight: '1.7',
                      whiteSpace: 'pre-wrap',
                    }}>
                      {entry.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowJournalEntries(false)}
              className="cta-button secondary"
              style={{ width: '100%' }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ForParentsPage;

