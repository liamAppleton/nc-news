import { useState, useEffect } from 'react';
import { getArticles } from '../../api';
import { ArticleCard } from './ArticleCard';
import { Loading } from './Loading';
import { ErrorCard } from './ErrorCard';

export const ArticleDisplay = ({ searchParams, setHome }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const topicQuery = searchParams.get('topic');
  const sortByQuery = searchParams.get('sort_by');
  const orderQuery = searchParams.get('order');

  useEffect(() => {
    setHome(true);
    getArticles(topicQuery, sortByQuery, orderQuery)
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
  }, [topicQuery, sortByQuery, orderQuery]);

  if (error) return <ErrorCard error={error} />;

  if (loading) return <Loading />;

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
