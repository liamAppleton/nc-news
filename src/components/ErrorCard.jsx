import Card from 'react-bootstrap/Card';

export const ErrorCard = ({ error }) => {
  return (
    <Card className="card-width d-flex align-items-center mb-3 p-1">
      <Card.Title>{error.status}</Card.Title>
      <Card.Text>{error.msg}</Card.Text>
    </Card>
  );
};
