import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ArticleDisplay } from './components/ArticleDisplay';
import { SingleArticleDisplay } from './components/SingleArticleDisplay';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleDisplay />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticleDisplay />}
        />
      </Routes>
    </>
  );
}

export default App;
