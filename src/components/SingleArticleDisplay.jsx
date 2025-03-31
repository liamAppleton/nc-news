import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CommentCard } from './CommentCard';
import { Loading } from './Loading';
import { getArticleById, getCommentsByArticleId } from '../../api';
import { dateFormatter } from '../../utils/utils';

export const SingleArticleDisplay = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [commentsById, setCommentsById] = useState([]);
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then(({ data: { article } }) => {
        setSingleArticle(article);
        return getCommentsByArticleId(article_id);
      })
      .then(({ data: { comments } }) => {
        console.log(comments);
        setCommentsById(comments);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={singleArticle.article_img_url} />
            <Card.Body>
              <Card.Title>{singleArticle.title}</Card.Title>
              <Card.Text className="fst-italic">
                {singleArticle.author}{' '}
                <span>{dateFormatter(new Date(singleArticle.created_at))}</span>
              </Card.Text>
              <Card.Text>{singleArticle.body}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        {commentsById.map((comment) => {
          return (
            <div
              key={comment.comment_id}
              className="col-12 d-flex justify-content-center"
            >
              <CommentCard comment={comment} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
