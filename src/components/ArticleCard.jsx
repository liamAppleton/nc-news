import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
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

  if (loading) return <Loading />;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.article_img_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.author} {dateFormatter(new Date(article.created_at))}
        </Card.Text>
        <Link to={`/articles/${article.article_id}`}>
          <Button variant="primary">View article</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
