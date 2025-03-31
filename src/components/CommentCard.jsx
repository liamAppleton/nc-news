import Card from 'react-bootstrap/Card';
import { dateFormatter } from '../../utils/utils';

export const CommentCard = ({ comment }) => {
  return (
    <div className="col-12 d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            {comment.author}{' '}
            <span>{dateFormatter(new Date(comment.created_at))}</span>
          </Card.Subtitle>
          <Card.Text>{comment.body}</Card.Text>
          <Card.Text>Votes: {comment.votes}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
