import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ErrorCard } from './ErrorCard';
import { CommentDisplay } from './CommentDisplay';
import { Vote } from './Vote';
import { CommentCount } from './CommentCount';
import { getArticleById } from '../../api';
import { dateFormatter } from '../../utils/utils';
import { PlaceholderCard } from './PlaceholderCard';
import { HomeContext } from '../contexts/Home';
import { IoChevronBack } from 'react-icons/io5';

export const SingleArticleDisplay = () => {
  const { home, setHome } = useContext(HomeContext);
  const [singleArticle, setSingleArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setHome(false);
    getArticleById(article_id)
      .then(({ data: { article } }) => {
        setSingleArticle(article);
        setLoading(false);
        setError(null);
      })
      .catch(({ response: { data } }) => {
        setError(data);
      });
  }, []);

  if (error) return <ErrorCard error={error} />;

  if (loading) return <PlaceholderCard />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-5">
          <Card className="card-width">
            {!home && (
              <IoChevronBack
                aria-label="back"
                role="button"
                aria-pressed={home}
                tabIndex="0"
                className="arrow brand-red m-2 position-absolute"
                style={{ left: '-40px', top: '-15x' }}
                size={30}
                onClick={() => navigate(-1)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') navigate(-1);
                }}
                onMouseDown={(event) => event.preventDefault()}
              />
            )}
            <Card.Img
              variant="top"
              src={singleArticle.article_img_url}
              alt={singleArticle.title}
            />
            <Card.Body>
              <Card.Title>{singleArticle.title}</Card.Title>
              <Card.Text className="fst-italic">
                {singleArticle.author}
                {' • '}
                <span className="fst-italic">
                  {dateFormatter(new Date(singleArticle.created_at))}
                </span>
              </Card.Text>
              <Card.Text>{singleArticle.body}</Card.Text>
              <div className="d-flex align-items-center gap-3">
                <Vote
                  id={singleArticle.article_id}
                  votes={singleArticle.votes}
                />
                <CommentCount article={singleArticle} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <CommentDisplay articleId={article_id} />
    </div>
  );
};
