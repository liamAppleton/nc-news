import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../../api';
import { ArticleCard } from './ArticleCard';
import { Loading } from './Loading';
import { ErrorCard } from './ErrorCard';

export const ArticleDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get('topic');
  const sortByQuery = searchParams.get('sort_by');

  useEffect(() => {
    getArticles(topicQuery, sortByQuery)
      .then(
        ({
          data: {
            articles: { rows },
          },
        }) => {
          setArticles(rows);
          setLoading(false);
          setError(false);
        }
      )
      .catch(() => {
        setError(true);
      });
  }, [topicQuery, sortByQuery]);

  if (error) return <ErrorCard />;

  if (loading) return <Loading componentName={'ArticleDisplay'} />;

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
