import { MdDeleteOutline } from 'react-icons/md';
import { deleteComment } from '../../api';
import { useContext } from 'react';
import { CommentsContext } from '../contexts/Comments';

export const DeleteButton = ({ commentId }) => {
  const { setCommentsUpdated } = useContext(CommentsContext);
  const handleClick = () => {
    deleteComment(commentId).then(() => {
      setCommentsUpdated(true);
      setTimeout(() => setCommentsUpdated(false), 1000);
    }); //! change CommentContext to be an object with the component
  };

  return (
    <div className="d-flex align-items-center">
      <MdDeleteOutline size={20} onClick={handleClick} />
    </div>
  );
};
