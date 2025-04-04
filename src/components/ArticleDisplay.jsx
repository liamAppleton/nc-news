import { useState, useEffect, useContext } from 'react';
import { getArticles } from '../../api';
import { ArticleCard } from './ArticleCard';
import { ErrorCard } from './ErrorCard';
import { useParams } from 'react-router-dom';
import { PlaceholderCard } from './PlaceholderCard';
import { HomeContext } from '../contexts/Home';

export const ArticleDisplay = ({ searchParams }) => {
  const { setHome } = useContext(HomeContext);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { topic } = useParams();
  const sortByQuery = searchParams.get('sort_by');
  const orderQuery = searchParams.get('order');

  useEffect(() => {
    setHome(true);
    getArticles(topic, sortByQuery, orderQuery)
      .then(
        ({
          data: {
            articles: { rows },
          },
        }) => {
          setArticles(rows);
          setLoading(false);
          setError(null);
        }
      )
      .catch(({ response: { data } }) => {
        setError(data);
      });
  }, [topic, sortByQuery, orderQuery]);

  if (error) return <ErrorCard error={error} />;

  if (loading) return <PlaceholderCard />;

  return (
    <div className="container">
      <div className="row">
        {articles.map((article) => {
          return (
            <div key={article.article_id} className="col-12 mb-3">
              <ArticleCard articleId={article.article_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
