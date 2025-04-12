import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Profile from './components/Profile';

const Layout = () => {
  const location = useLocation();

  const isArticlePage = location.pathname.startsWith('/article');

  return (
    <>
      {!isArticlePage && <Profile />}
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;