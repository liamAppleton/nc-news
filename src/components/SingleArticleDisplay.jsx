import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Loading } from './Loading';
import { ErrorCard } from './ErrorCard';
import { CommentDisplay } from './CommentDisplay';
import { Vote } from './Vote';
import { CommentCount } from './CommentCount';
import { getArticleById } from '../../api';
import { dateFormatter } from '../../utils/utils';

export const SingleArticleDisplay = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then(({ data: { article } }) => {
        setSingleArticle(article);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) return <ErrorCard />;

  if (loading) return <Loading componentName={'Card'} />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-5">
          <Card className="card-width">
            <Card.Img variant="top" src={singleArticle.article_img_url} />
            <Card.Body>
              <Card.Title>{singleArticle.title}</Card.Title>
              <Card.Text className="fst-italic">
                {singleArticle.author}{' '}
                <span>{dateFormatter(new Date(singleArticle.created_at))}</span>
              </Card.Text>
              <Card.Text>{singleArticle.body}</Card.Text>
              <div className="d-flex align-items-center gap-3">
                <Vote
                  id={singleArticle.article_id}
                  votes={singleArticle.votes}
                />
                <CommentCount article={singleArticle} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <CommentDisplay articleId={article_id} />
    </div>
  );
};
