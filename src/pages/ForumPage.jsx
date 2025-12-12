import { useState } from 'react';
import './ForumPage.css';

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

  const forumSections = [
    {
      title: 'Истерики и сильные эмоции',
      description: 'Как реагировать, что помогает, что усиливает напряжение.',
      icon: '😤',
    },
    {
      title: 'Границы и дисциплина',
      description: 'Как сохранять спокойствие и последовательность, устанавливать правила и договоренности.',
      icon: '🎯',
    },
    {
      title: 'Сон, питание, режим и эмоции',
      description: 'Как биологические факторы связаны с поведением и настроением ребенка.',
      icon: '😴',
    },
    {
      title: 'Детский сад и адаптация',
      description: 'Как поддержать ребенка в новых социальных условиях.',
      icon: '🏫',
    },
    {
      title: 'Игры и упражнения для развития саморегуляции',
      description: 'Обменивайтесь идеями, находите полезные практики.',
      icon: '🎮',
    },
  ];

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
      {/* Welcome Section */}
      <section className="content-block blockstyle-soft">
        <div className="content-container forum-welcome">
          <h1 className="content-h1 forum-welcome-title">
            Добро пожаловать в пространство поддержки родителей!
          </h1>
          <div className="forum-welcome-text">
            <p>
              Здесь вы можете обсудить любые вопросы, связанные с эмоциональной
              регуляцией дошкольников, поделиться своим опытом и получить
              поддержку от других родителей и специалистов.
            </p>
            <p>
              Наше сообщество создано для того, чтобы помочь вам лучше понимать
              эмоциональные реакции ребенка и выбирать более эффективные
              способы взаимодействия с ним.
            </p>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="content-block forum-rules">
        <div className="content-container forum-rules-container">
          <div className="forum-rules-card">
            <h2 className="forum-rules-title">
              Правила нашего пространства
            </h2>
            <p className="forum-rules-intro">
              Мы создаем безопасную среду, поэтому просим участников:
            </p>
            <ul className="forum-rules-list">
              <li>уважительно общаться друг с другом;</li>
              <li>избегать оценочных комментариев;</li>
              <li>не давать медицинских или психиатрических рекомендаций;</li>
              <li>помнить, что каждый ребенок и каждая семья уникальны.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Forum Sections */}
      <section className="content-block forum-sections">
        <div className="content-container forum-sections-container">
          <h2 className="content-h2 forum-sections-title">
            Форум
          </h2>
          <p className="forum-sections-subtitle">
            Разделы форума с обсуждениями между родителями
          </p>
          <div className="forum-sections-grid">
            {forumSections.map((section, index) => (
              <div key={index} className="forum-section-card">
                <div className="forum-section-icon">
                  {section.icon}
                </div>
                <h3 className="forum-section-title">
                  {section.title}
                </h3>
                <p className="forum-section-description">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Psychologist Section */}
      <section className="content-block blockstyle-soft">
        <div className="content-container forum-ask-psychologist-container">
          <h2 className="content-h2 forum-ask-psychologist-title">
            Спросите психолога
          </h2>
          <p className="forum-ask-psychologist-intro">
            В этом разделе вы можете задать вопрос специалисту и получить
            короткую профессиональную рекомендацию.
          </p>
          <div className="forum-ask-psychologist-card">
            <h3 className="forum-ask-psychologist-subtitle">
              Психолог помогает разобраться:
            </h3>
            <ul className="forum-ask-psychologist-list">
              <li>почему возникает определенная эмоциональная реакция у ребенка;</li>
              <li>какие стратегии поведения подходят именно в вашей ситуации;</li>
              <li>когда стоит обратиться за дополнительной консультацией.</li>
            </ul>
            <p className="forum-ask-psychologist-note">
              К каждому вопросу мы добавляем подборку полезных материалов —
              статей, книг и упражнений.
            </p>
          </div>
          <div className="forum-ask-psychologist-btn-container">
            <button
              onClick={() => setShowForm(!showForm)}
              className="cta-button primary forum-ask-psychologist-btn"
            >
              {showForm ? '✕ Закрыть форму' : '✍️ Задать вопрос психологу'}
            </button>
          </div>
        </div>
      </section>

      {/* Question Form */}
      {showForm && (
        <section className="content-block forum-form-section">
          <div className="content-container forum-form-container">
            <div className="forum-form-card">
              <h2 className="forum-form-title">
                Задайте вопрос психологу
              </h2>
              <p className="forum-form-subtitle">
                Опишите вашу ситуацию, и специалист даст профессиональную рекомендацию
              </p>
              <form onSubmit={handleSubmitQuestion}>
                <div className="form-group">
                  <label className="form-label">
                    Категория
                  </label>
                  <select
                    value={newQuestion.category}
                    onChange={(e) => setNewQuestion({ ...newQuestion, category: e.target.value })}
                    className="form-select"
                  >
                    {categories.filter(c => c !== 'Все вопросы').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Заголовок вопроса
                  </label>
                  <input
                    type="text"
                    value={newQuestion.title}
                    onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                    placeholder="Кратко опишите вашу ситуацию"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Подробное описание
                  </label>
                  <textarea
                    value={newQuestion.content}
                    onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                    placeholder="Расскажите подробнее о ситуации..."
                    rows="6"
                    className="form-textarea"
                    required
                  />
                </div>

                <button type="submit" className="cta-button primary form-button-full">
                  Отправить вопрос
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Questions and Answers Section */}
      <section className="content-block" style={{ paddingTop: showForm ? '2rem' : '0' }}>
        <div className="content-container">
          <h2 className="content-h2 forum-questions-title">
            Вопросы и ответы
          </h2>
          <p className="forum-questions-subtitle">
            Ответы психологов на вопросы родителей
          </p>
          
          {/* Categories Filter */}
          <div className="forum-categories">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`forum-category-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Questions List */}
          <div className="forum-questions-list">
            {filteredQuestions.map(question => (
              <div
                key={question.id}
                className={`forum-question-card ${question.hasAnswer ? 'has-answer' : ''}`}
                onClick={() => setSelectedQuestion(selectedQuestion === question.id ? null : question.id)}
              >
                {/* Question Header */}
                <div className="forum-question-header">
                  <div>
                    <div className="forum-question-category-badge">
                      {question.category}
                    </div>
                    <h3 className="forum-question-title">
                      {question.title}
                    </h3>
                    <div className="forum-question-meta">
                      <span className="forum-question-meta-author">{question.author}</span> • {question.date}
                    </div>
                  </div>
                  {question.hasAnswer && (
                    <div className="forum-question-answer-badge">
                      ✓ Ответ психолога
                    </div>
                  )}
                </div>

                {/* Question Content */}
                <p className="forum-question-content">
                  {question.content}
                </p>

                {/* Question Stats */}
                <div className="forum-question-stats">
                  <span>💬 {question.answers} {question.answers === 1 ? 'ответ' : 'ответов'}</span>
                  <span>❤️ {question.likes}</span>
                </div>

                {/* Psychologist Answer */}
                {selectedQuestion === question.id && question.hasAnswer && question.psychologistAnswer && (
                  <div className="forum-psychologist-answer">
                    <div className="forum-psychologist-header">
                      <div className="forum-psychologist-avatar">
                        👨‍⚕️
                      </div>
                      <div>
                        <div className="forum-psychologist-name">
                          {question.psychologistAnswer.author}
                        </div>
                        <div className="forum-psychologist-date">
                          {question.psychologistAnswer.date}
                        </div>
                      </div>
                    </div>
                    <p className="forum-psychologist-content">
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

