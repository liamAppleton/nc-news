import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export const ArticlePlaceholder = () => {
  return (
    <Card className="card-width mb-3">
      {/* <Card.Img variant="top" src="src/assets/placeholder.png" /> */}
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};
