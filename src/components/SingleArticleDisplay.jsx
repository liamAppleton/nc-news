import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getArticleById } from '../../api';

export const SingleArticleDisplay = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then(({ data: { article } }) => {
      console.log(article);
      setSingleArticle(article);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={singleArticle.article_img_url} />
            <Card.Body>
              <Card.Title>{singleArticle.title}</Card.Title>
              <Card.Text className="fst-italic">
                {singleArticle.author} <span>{singleArticle.created_at}</span>
              </Card.Text>
              <Card.Text>{singleArticle.body}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
