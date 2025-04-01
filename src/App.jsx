import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ArticleDisplay } from './components/ArticleDisplay';
import { SingleArticleDisplay } from './components/SingleArticleDisplay';
import { Header } from './components/Header';
import { UserProvider } from './contexts/User';

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleDisplay />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticleDisplay />}
        />
      </Routes>
    </UserProvider>
  );
}

export default App;
