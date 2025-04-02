import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Vote } from './Vote';
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

          <div className="d-flex gap-3 align-items-center">
            <div className="d-inline-flex gap-1 align-items-center border rounded-pill p-1">
              <Link
                to={`/articles/${article.article_id}`}
                className="d-flex align-items-center"
              >
                <FaRegComment color={'#808080'} size={20} className="m-0" />
              </Link>
              <p
                className="fs-6 m-0 user-select-none"
                style={{ cursor: 'default' }}
              >
                {article.comment_count}
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
