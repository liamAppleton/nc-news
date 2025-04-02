import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../../api';
import { ArticleCard } from './ArticleCard';
import { Loading } from './Loading';
import Card from 'react-bootstrap/Card';

export const ArticleDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get('topic');

  useEffect(() => {
    getArticles(topicQuery)
      .then(
        ({
          data: {
            articles: { rows },
          },
        }) => {
          setArticles(rows);
          setLoading(false);
        }
      )
      .catch(() => {
        setError(true);
        setTimeout(() => setError(false), 2000);
      });
  }, [topicQuery]);

  if (loading) return <Loading componentName={'ArticleDisplay'} />;

  return (
    <div className="container">
      {error && (
        <Card className="card-width d-flex align-items-center mb-3 p-1">
          <Card.Text className="text-danger">
            Oops! Something went wrong
          </Card.Text>
        </Card>
      )}
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
