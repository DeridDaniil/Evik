import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import VideoLibraryPage from './pages/VideoLibraryPage';
import InteractivePage from './pages/InteractivePage';
import DailyActivitiesPage from './pages/DailyActivitiesPage';
import ForumPage from './pages/ForumPage';
import ForParentsPage from './pages/ForParentsPage';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<VideoLibraryPage />} />
        <Route path="/interactive" element={<InteractivePage />} />
        <Route path="/activities" element={<DailyActivitiesPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/for-parents" element={<ForParentsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;