import { useState, useEffect } from 'react';
import { getArticles } from '../../api';
import { ArticleCard } from './ArticleCard';

export const ArticleDisplay = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(
      ({
        data: {
          articles: { rows },
        },
      }) => {
        console.log(rows);
        setArticles(rows);
      }
    );
  }, []);

  return (
    <div className="container">
      <div className="row">
        {articles.map((article) => {
          return (
            <div
              key={article.article_id}
              className="col-12 d-flex justify-content-center"
            >
              <ArticleCard article={article} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
