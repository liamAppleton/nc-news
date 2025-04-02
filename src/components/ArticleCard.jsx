import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Vote } from './Vote';
import { CommentCount } from './CommentCount';
import { Loading } from './Loading';
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

  if (loading) return <Loading componentName={'Card'} />;

  return (
    <Card className="card-width">
      <Card.Img variant="top" src={article.article_img_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.author} {dateFormatter(new Date(article.created_at))}
        </Card.Text>
        <div className="d-flex align-items-center gap-3">
          <Vote id={article.article_id} votes={article.votes} />
          <CommentCount article={article} />
        </div>
      </Card.Body>
    </Card>
  );
};
