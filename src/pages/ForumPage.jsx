import { useState } from 'react';

const ForumPage = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      author: 'Мария К.',
      date: '2 дня назад',
      title: 'Ребенок 4 лет не может успокоиться после садика',
      content: 'Каждый день после садика сын приходит очень возбужденный, не может успокоиться до самого вечера. Что делать?',
      answers: 2,
      likes: 12,
      category: 'Саморегуляция',
      hasAnswer: true,
      psychologistAnswer: {
        author: 'Психолог Елена Иванова',
        date: '1 день назад',
        content: 'Это нормальная реакция на насыщенный день в детском саду. Рекомендую создать "ритуал перехода": спокойная прогулка, тихая игра, обсуждение дня. Избегайте активных игр и гаджетов сразу после садика. Дайте ребенку время "разгрузиться".',
        verified: true,
      }
    },
    {
      id: 2,
      author: 'Анна П.',
      date: '5 дней назад',
      title: 'Как реагировать на истерики в общественных местах?',
      content: 'Дочке 3.5 года, устраивает истерики в магазинах. Очень стыдно перед людьми. Как правильно себя вести?',
      answers: 5,
      likes: 28,
      category: 'Эмоции',
      hasAnswer: true,
      psychologistAnswer: {
        author: 'Психолог Дмитрий Соколов',
        date: '4 дня назад',
        content: 'Важно помнить: истерика - это не манипуляция, а неспособность справиться с эмоциями. Сохраняйте спокойствие, опуститесь на уровень глаз ребенка, говорите тихо. Если возможно, выйдите в более спокойное место. После истерики обязательно обсудите произошедшее.',
        verified: true,
      }
    },
    {
      id: 3,
      author: 'Ольга С.',
      date: '1 неделю назад',
      title: 'Ребенок отказывается делиться игрушками',
      content: 'Сыну 5 лет, категорически не хочет делиться своими игрушками с другими детьми на площадке. Это нормально?',
      answers: 3,
      likes: 15,
      category: 'Социализация',
      hasAnswer: true,
      psychologistAnswer: {
        author: 'Психолог Елена Иванова',
        date: '6 дней назад',
        content: 'Да, это абсолютно нормально для этого возраста. Понятие "делиться" формируется постепенно. Не заставляйте насильно. Лучше объясните, что можно установить правила: "Сейчас играет Миша 5 минут, потом ты". Хвалите, когда ребенок сам проявляет щедрость.',
        verified: true,
      }
    },
    {
      id: 4,
      author: 'Дмитрий Л.',
      date: '3 дня назад',
      title: 'Как научить ребенка выражать злость правильно?',
      content: 'Дочь 4.5 лет, когда злится - кусается и дерется. Как научить выражать злость по-другому?',
      answers: 1,
      likes: 9,
      category: 'Эмоции',
      hasAnswer: false,
    },
  ]);

  const [newQuestion, setNewQuestion] = useState({
    title: '',
    content: '',
    category: 'Общее',
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const categories = [
    'Все вопросы',
    'Саморегуляция',
    'Эмоции',
    'Социализация',
    'Границы',
    'Общее',
  ];

  const [activeCategory, setActiveCategory] = useState('Все вопросы');

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.title && newQuestion.content) {
      const question = {
        id: questions.length + 1,
        author: 'Вы',
        date: 'только что',
        title: newQuestion.title,
        content: newQuestion.content,
        answers: 0,
        likes: 0,
        category: newQuestion.category,
        hasAnswer: false,
      };
      setQuestions([question, ...questions]);
      setNewQuestion({ title: '', content: '', category: 'Общее' });
      setShowForm(false);
    }
  };

  const filteredQuestions = activeCategory === 'Все вопросы'
    ? questions
    : questions.filter(q => q.category === activeCategory);

  return (
    <main className="content-wrapper">
      {/* Hero Section */}
      <section className="content-block blockstyle-soft">
        <div className="content-container">
          <h1 className="content-h1">Форум для родителей</h1>
          <p className="content-paragraph">
            Задавайте вопросы и получайте ответы от профессиональных психологов. Делитесь опытом с другими родителями.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={() => setShowForm(!showForm)}
              className="cta-button primary"
            >
              {showForm ? '✕ Закрыть форму' : '✍️ Задать вопрос'}
            </button>
          </div>
        </div>
      </section>

      {/* Question Form */}
      {showForm && (
        <section className="content-block" style={{ paddingTop: '0' }}>
          <div className="content-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              boxShadow: 'var(--shadow-lg)',
              border: '2px solid var(--accent-color)',
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}>
                Задайте ваш вопрос
              </h2>
              <form onSubmit={handleSubmitQuestion}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}>
                    Категория
                  </label>
                  <select
                    value={newQuestion.category}
                    onChange={(e) => setNewQuestion({ ...newQuestion, category: e.target.value })}
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
                    {categories.filter(c => c !== 'Все вопросы').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}>
                    Заголовок вопроса
                  </label>
                  <input
                    type="text"
                    value={newQuestion.title}
                    onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                    placeholder="Кратко опишите вашу ситуацию"
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
                    required
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}>
                    Подробное описание
                  </label>
                  <textarea
                    value={newQuestion.content}
                    onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                    placeholder="Расскажите подробнее о ситуации..."
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      fontSize: '1rem',
                      border: '2px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-body)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="cta-button primary"
                  style={{ width: '100%' }}
                >
                  Отправить вопрос
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="content-block" style={{ paddingTop: showForm ? '2rem' : '0' }}>
        <div className="content-container">
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: activeCategory === cat ? 'var(--accent-gradient)' : 'var(--bg-card)',
                  color: activeCategory === cat ? 'var(--text-on-accent)' : 'var(--text-secondary)',
                  border: activeCategory === cat ? 'none' : '2px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    e.target.style.borderColor = 'var(--accent-color)';
                    e.target.style.color = 'var(--accent-color)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Questions List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {filteredQuestions.map(question => (
              <div
                key={question.id}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  border: question.hasAnswer ? '2px solid var(--accent-color)' : '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedQuestion(selectedQuestion === question.id ? null : question.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {/* Question Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}>
                  <div>
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
                      {question.category}
                    </div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}>
                      {question.title}
                    </h3>
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-light)',
                    }}>
                      <span style={{ fontWeight: '600' }}>{question.author}</span> • {question.date}
                    </div>
                  </div>
                  {question.hasAnswer && (
                    <div style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--accent-gradient)',
                      color: 'white',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                    }}>
                      ✓ Ответ психолога
                    </div>
                  )}
                </div>

                {/* Question Content */}
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  marginBottom: '1rem',
                }}>
                  {question.content}
                </p>

                {/* Question Stats */}
                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  fontSize: '0.9375rem',
                  color: 'var(--text-light)',
                }}>
                  <span>💬 {question.answers} {question.answers === 1 ? 'ответ' : 'ответов'}</span>
                  <span>❤️ {question.likes}</span>
                </div>

                {/* Psychologist Answer */}
                {selectedQuestion === question.id && question.hasAnswer && question.psychologistAnswer && (
                  <div style={{
                    marginTop: '1.5rem',
                    padding: '1.5rem',
                    background: 'var(--bg-section)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--accent-color)',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1rem',
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'var(--accent-gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem',
                        color: 'white',
                      }}>
                        👨‍⚕️
                      </div>
                      <div>
                        <div style={{
                          fontSize: '1rem',
                          fontWeight: '700',
                          color: 'var(--text-primary)',
                        }}>
                          {question.psychologistAnswer.author}
                        </div>
                        <div style={{
                          fontSize: '0.8125rem',
                          color: 'var(--text-light)',
                        }}>
                          {question.psychologistAnswer.date}
                        </div>
                      </div>
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      lineHeight: '1.7',
                    }}>
                      {question.psychologistAnswer.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForumPage;

