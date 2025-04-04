import './App.css';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { ArticleDisplay } from './components/ArticleDisplay';
import { SingleArticleDisplay } from './components/SingleArticleDisplay';
import { NavBar } from './components/NavBar';
import { ErrorCard } from './components/ErrorCard';
import { HomeProvider } from './contexts/Home';
import { UserProvider } from './contexts/User';
import { CommentsProvider } from './contexts/Comments';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <HomeProvider>
      <CommentsProvider>
        <UserProvider>
          <NavBar
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <Routes>
            <Route
              path="/"
              element={<ArticleDisplay searchParams={searchParams} />}
            />
            <Route
              path="/topics/:topic"
              element={<ArticleDisplay searchParams={searchParams} />}
            />
            <Route
              path="/articles/:article_id"
              element={<SingleArticleDisplay />}
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
    </HomeProvider>
  );
}

export default App;
