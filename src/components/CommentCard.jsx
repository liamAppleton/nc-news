import Card from 'react-bootstrap/Card';
import { dateFormatter } from '../../utils/utils';
import { Vote } from './Vote';
import { useEffect, useState } from 'react';
import { getUser } from '../../api';

export const CommentCard = ({ comment }) => {
  const [userPic, setUserPic] = useState('');

  useEffect(() => {
    getUser(comment.author).then(({ data: { user } }) => {
      setUserPic(user.avatar_url);
    });
  }, []);

  return (
    <Card className="card-width">
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          <span>
            <img src={userPic || null} alt={comment.author} className="w-25" />
          </span>
          {comment.author} {dateFormatter(new Date(comment.created_at))}
        </Card.Subtitle>
        <Card.Text>{comment.body}</Card.Text>
        <Vote
          id={comment.comment_id}
          votes={comment.votes}
          componentName={'CommentCard'}
        />
      </Card.Body>
    </Card>
  );
};
