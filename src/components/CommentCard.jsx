import Card from 'react-bootstrap/Card';
import { dateFormatter } from '../../utils/utils';
import { Vote } from './Vote';

export const CommentCard = ({ comment }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
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
