import Card from 'react-bootstrap/Card';
import { dateFormatter } from '../../utils/utils';
import { Vote } from './Vote';
import { DeleteButton } from './DeleteButton';
import { useEffect, useState, useContext } from 'react';
import { getUser } from '../../api';
import { UserContext } from '../contexts/User';
import { PlaceholderCard } from './PlaceholderCard';

export const CommentCard = ({ comment }) => {
  const [userPic, setUserPic] = useState('');
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    getUser(comment.author).then(({ data: { user } }) => {
      setUserPic(user.avatar_url);
      setLoading(false);
    });
  }, []);

  if (loading) return <PlaceholderCard />;

  if (deleted)
    return (
      <Card className="card-width text-muted">
        <Card.Body>Comment deleted</Card.Body>
      </Card>
    );

  return (
    <Card className="card-width comment-card">
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted fst-italic">
          <span>
            <img
              src={userPic || null}
              alt={comment.author}
              className="w-25"
              style={{ maxWidth: '30px', maxHeight: '30px' }}
            />
          </span>{' '}
          {comment.author}
          {' • '} {dateFormatter(new Date(comment.created_at))}
        </Card.Subtitle>
        <Card.Text>{comment.body}</Card.Text>
        <div className="d-flex justify-content-between">
          <Vote
            id={comment.comment_id}
            votes={comment.votes}
            componentName={'CommentCard'}
          />
          {loggedInUser === comment.author && (
            <DeleteButton
              commentId={comment.comment_id}
              deleted={deleted}
              setDeleted={setDeleted}
            />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
