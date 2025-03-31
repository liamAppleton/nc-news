import { useState, useEffect } from 'react';
import { getArticles } from '../../api';

export const ArticleDisplay = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(
      ({
        data: {
          articles: { rows },
        },
      }) => {
        setArticles(rows);
      }
    );
  }, []);

  return (
    <div className="container border">
      <ul>
        {articles.map(
          ({ article_id, article_img_url, comment_count, title }) => {
            return <li key={article_id}>{title}</li>;
          }
        )}
      </ul>
    </div>
  );
};
