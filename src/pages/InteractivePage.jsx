import { useState } from 'react';

const InteractivePage = () => {
  const [currentScene, setCurrentScene] = useState('start');
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const scenarios = {
    start: {
      title: 'Ребенок не хочет убирать игрушки',
      description: 'Вы просите ребенка убрать игрушки перед ужином, но он продолжает играть и игнорирует вас.',
      emoji: '🧸',
      background: 'linear-gradient(135deg, #FFE5B4 0%, #FFF8DC 100%)',
    },
    scene2: {
      title: 'Ребенок отказывается делиться',
      description: 'На детской площадке другой ребенок просит поиграть с игрушкой вашего сына/дочери, но он отказывается.',
      emoji: '🎈',
      background: 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)',
    },
    scene3: {
      title: 'Истерика в магазине',
      description: 'Ребенок требует купить игрушку, вы отказываете, и начинается истерика прямо в магазине.',
      emoji: '🛒',
      background: 'linear-gradient(135deg, #FFE0E0 0%, #FFD0D0 100%)',
    },
  };

  const reactions = [
    {
      id: 'punish',
      label: 'Наказать',
      icon: '⛔',
      color: '#FF6B6B',
      result: {
        emoji: '😢',
        title: 'Ребенок расстроен',
        description: 'Наказание может вызвать страх и обиду. Ребенок не понимает, как правильно себя вести, а только боится последствий.',
        impact: 'Негативное влияние на эмоциональную регуляцию',
        recommendation: 'Попробуйте объяснить ситуацию и предложить альтернативу.',
      }
    },
    {
      id: 'praise',
      label: 'Похвалить за попытку',
      icon: '⭐',
      color: '#FFD93D',
      result: {
        emoji: '😊',
        title: 'Ребенок чувствует поддержку',
        description: 'Похвала за малейшие успехи укрепляет уверенность. Ребенок понимает, что его усилия замечают.',
        impact: 'Позитивное влияние на самооценку',
        recommendation: 'Отличный выбор! Продолжайте замечать позитивные моменты.',
      }
    },
    {
      id: 'ignore',
      label: 'Оставить одного',
      icon: '🚪',
      color: '#A0A0A0',
      result: {
        emoji: '😟',
        title: 'Ребенок чувствует себя брошенным',
        description: 'Игнорирование может усилить тревогу. Ребенок не знает, как справиться с ситуацией самостоятельно.',
        impact: 'Может привести к эмоциональной отстраненности',
        recommendation: 'Важно оставаться рядом и помогать регулировать эмоции.',
      }
    },
    {
      id: 'explain',
      label: 'Объяснить и поддержать',
      icon: '💚',
      color: '#6BCF7F',
      result: {
        emoji: '🌟',
        title: 'Ребенок учится саморегуляции',
        description: 'Спокойное объяснение и эмоциональная поддержка помогают ребенку понять свои чувства и научиться управлять ими.',
        impact: 'Развитие эмоционального интеллекта',
        recommendation: 'Превосходно! Это лучший подход для развития эмоциональной регуляции.',
      }
    },
  ];

  const handleReactionSelect = (reaction) => {
    setSelectedReaction(reaction);
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
    setSelectedReaction(null);
  };

  const handleNextScene = () => {
    const scenes = ['start', 'scene2', 'scene3'];
    const currentIndex = scenes.indexOf(currentScene);
    const nextIndex = (currentIndex + 1) % scenes.length;
    setCurrentScene(scenes[nextIndex]);
    handleReset();
  };

  const currentScenario = scenarios[currentScene];

  return (
    <main className="content-wrapper">
      {/* Hero Section */}
      <section className="content-block blockstyle-accent">
        <div className="content-container">
          <h1 className="content-h1">Составь историю</h1>
          <p className="content-paragraph">
            Интерактивный тренажер для родителей: выбирайте реакции и смотрите, как они влияют на эмоциональное состояние ребенка
          </p>
        </div>
      </section>

      {/* Interactive Scene */}
      <section className="content-block">
        <div className="content-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {!showResult ? (
            <>
              {/* Scenario Card */}
              <div style={{
                background: currentScenario.background,
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                marginBottom: '3rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                border: '3px solid var(--accent-color)',
              }}>
                <div style={{ fontSize: '6rem', marginBottom: '1.5rem' }}>
                  {currentScenario.emoji}
                </div>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  {currentScenario.title}
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                }}>
                  {currentScenario.description}
                </p>
              </div>

              {/* Reaction Buttons */}
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '2rem',
                  textAlign: 'center',
                }}>
                  Как вы отреагируете?
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                }}>
                  {reactions.map(reaction => (
                    <button
                      key={reaction.id}
                      onClick={() => handleReactionSelect(reaction)}
                      style={{
                        padding: '2rem 1.5rem',
                        background: 'var(--bg-card)',
                        border: `3px solid ${reaction.color}`,
                        borderRadius: 'var(--radius-lg)',
                        cursor: 'pointer',
                        transition: 'var(--transition)',
                        textAlign: 'center',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                        e.currentTarget.style.background = reaction.color + '15';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'var(--bg-card)';
                      }}
                    >
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        {reaction.icon}
                      </div>
                      <div style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                      }}>
                        {reaction.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Result Display */
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              boxShadow: 'var(--shadow-lg)',
              border: `3px solid ${selectedReaction.color}`,
              animation: 'fadeIn 0.5s ease',
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>
                  {selectedReaction.result.emoji}
                </div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  {selectedReaction.result.title}
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                }}>
                  {selectedReaction.result.description}
                </p>
              </div>

              <div style={{
                background: 'var(--bg-section)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: 'var(--accent-color)',
                  marginBottom: '0.5rem',
                }}>
                  Влияние на развитие:
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                }}>
                  {selectedReaction.result.impact}
                </p>
              </div>

              <div style={{
                background: 'var(--bg-overlay)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem',
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: 'var(--accent-color)',
                  marginBottom: '0.5rem',
                }}>
                  Рекомендация психолога:
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                }}>
                  {selectedReaction.result.recommendation}
                </p>
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
                <button
                  onClick={handleReset}
                  className="cta-button secondary"
                >
                  Попробовать снова
                </button>
                <button
                  onClick={handleNextScene}
                  className="cta-button primary"
                >
                  Следующая ситуация
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default InteractivePage;

