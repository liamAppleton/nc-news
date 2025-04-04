import './App.css';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { ArticleDisplay } from './components/ArticleDisplay';
import { SingleArticleDisplay } from './components/SingleArticleDisplay';
import { NavBar } from './components/NavBar';
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
        <Header />
        <NavBar
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
            path="/topics/:topic"
            element={
              <ArticleDisplay searchParams={searchParams} setHome={setHome} />
            }
          />
          <Route
            path="/articles/:article_id"
            element={<SingleArticleDisplay home={home} setHome={setHome} />}
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
