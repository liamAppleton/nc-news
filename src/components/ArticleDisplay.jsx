import { useState, useEffect } from 'react';
import { getArticles } from '../../api';
import { ArticleCard } from './ArticleCard';
import { Loading } from './Loading';

export const ArticleDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles().then(
      ({
        data: {
          articles: { rows },
        },
      }) => {
        setArticles(rows);
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <Loading componentName={'ArticleDisplay'} />;

  return (
    <div className="container">
      <div className="row">
        {articles.map((article) => {
          return (
            <div
              key={article.article_id}
              className="col-12 d-flex justify-content-center mb-3"
            >
              <ArticleCard articleId={article.article_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
