import Card from 'react-bootstrap/Card';
import { dateFormatter } from '../../utils/utils';

export const CommendCard = ({ comment }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          {comment.author} {dateFormatter(new Date(comment.created_at))}
        </Card.Subtitle>
        <Card.Text>{comment.body}</Card.Text>
        <Card.Text>Votes: {comment.votes}</Card.Text>
      </Card.Body>
    </Card>
  );
};
