import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Vote } from './Vote';
import { CommentCount } from './CommentCount';
import { PlaceholderCard } from './PlaceholderCard';
import { getArticleById } from '../../api';
import { dateFormatter } from '../../utils/utils';

export const ArticleCard = ({ articleId }) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleById(articleId).then(({ data: { article } }) => {
      setArticle(article);
      setLoading(false);
    });
  }, []);

  if (loading) return <PlaceholderCard />;

  return (
    <Card className="card-width">
      <Link to={`/articles/${articleId}`}>
        <Card.Img
          className="article-image"
          variant="top"
          src={article.article_img_url}
        />
      </Link>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text className="fst-italic">
          {article.author}
          {' • '}
          <span className="fst-italic">
            {dateFormatter(new Date(article.created_at))}
          </span>
        </Card.Text>

        <div className="d-flex align-items-center gap-3">
          <Vote id={article.article_id} votes={article.votes} />
          <CommentCount article={article} />
        </div>
      </Card.Body>
    </Card>
  );
};
