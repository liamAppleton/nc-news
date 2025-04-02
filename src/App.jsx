import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ArticleDisplay } from './components/ArticleDisplay';
import { SingleArticleDisplay } from './components/SingleArticleDisplay';
import { Header } from './components/Header';
import { UserProvider } from './contexts/User';
import { CommentsProvider } from './contexts/Comments';

function App() {
  return (
    <CommentsProvider>
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
    </CommentsProvider>
  );
}

export default App;
