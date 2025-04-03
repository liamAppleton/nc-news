import './App.css';
import { Route, Routes, Navigate, useSearchParams } from 'react-router-dom';
import { ArticleDisplay } from './components/ArticleDisplay';
import { SingleArticleDisplay } from './components/SingleArticleDisplay';
import { Header } from './components/Header';
import { ErrorCard } from './components/ErrorCard';
import { UserProvider } from './contexts/User';
import { CommentsProvider } from './contexts/Comments';
import { useState } from 'react';

function App() {
  const [home, setHome] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <CommentsProvider>
      <UserProvider>
        <Header
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          home={home}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ArticleDisplay searchParams={searchParams} setHome={setHome} />
            }
          />
          <Route
            path="/articles/:article_id"
            element={<SingleArticleDisplay setHome={setHome} />}
          />
          <Route
            path="*"
            to="/"
            element={
              <ErrorCard error={{ status: 404, msg: 'path not found' }} />
            }
          />
        </Routes>
      </UserProvider>
    </CommentsProvider>
  );
}

export default App;
