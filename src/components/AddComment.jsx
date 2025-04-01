import Card from 'react-bootstrap/Card';
import { UserContext } from '../contexts/User';
import { useContext, useState } from 'react';
import { postComment } from '../../api';

export const AddComment = ({ articleId }) => {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState({
    body: '',
    author: loggedInUser,
  });

  const handleChange = (e) => {
    setNewComment((prevComment) => {
      return { ...prevComment, body: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(articleId, newComment).then(() => {
      setNewComment({
        body: '',
        author: loggedInUser,
      });
      console.log('comment posted!');
    });
  };

  return (
    <Card className="border-0">
      <form onSubmit={handleSubmit} className="position-relative">
        <textarea
          className="form-control mb-2"
          style={{ minHeight: '100px' }}
          type="text"
          placeholder="Add a comment"
          value={newComment.body}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-primary position-absolute"
          style={{ top: '70%', right: '10px', transform: 'translateY(-50%)' }}
        >
          Post
        </button>
      </form>
    </Card>
  );
};
