import Card from 'react-bootstrap/Card';

export const ErrorCard = () => {
  return (
    <Card className="card-width d-flex align-items-center mb-3 p-1">
      <Card.Text className="text-danger">Oops! Something went wrong</Card.Text>
    </Card>
  );
};
