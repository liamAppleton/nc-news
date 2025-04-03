import Card from 'react-bootstrap/Card';
import { UserContext } from '../contexts/User';
import { CommentsContext } from '../contexts/Comments';
import { useContext, useState } from 'react';
import { postComment } from '../../api';

export const AddComment = ({
  articleId,
  postingComment,
  setPostingComment,
}) => {
  const { loggedInUser } = useContext(UserContext);
  const { setCommentsUpdated } = useContext(CommentsContext);
  const [newComment, setNewComment] = useState({
    body: '',
    author: loggedInUser,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNewComment((prevComment) => {
      return { ...prevComment, body: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostingComment(true);

    postComment(articleId, newComment)
      .then(() => {
        setPostingComment(false);
        setCommentsUpdated('post');
        setTimeout(() => setCommentsUpdated(null), 1000);
        setNewComment({
          body: '',
          author: loggedInUser,
        });
      })
      .catch(() => {
        setPostingComment(false);
        setError('Something went wrong');
        setTimeout(() => setError(null), 2000);
      });
  };

  return (
    <Card className="border-0 card-width">
      <form onSubmit={handleSubmit} className="position-relative">
        <textarea
          className="form-control mb-2"
          style={{ minHeight: '100px' }}
          type="text"
          placeholder="Add a comment"
          value={newComment.body}
          onChange={handleChange}
        />
        <p
          className="text-danger position-absolute m-0"
          style={{
            top: '70%',
            left: '115px',
            transform: 'translateY(-50%)',
            fontSize: '0.8rem',
          }}
        >
          {error}
        </p>
        <button
          type="submit"
          className="btn post-btn position-absolute"
          style={{ top: '70%', right: '10px', transform: 'translateY(-50%)' }}
          disabled={postingComment || newComment.body === '' ? true : false}
        >
          Post
        </button>
      </form>
    </Card>
  );
};
