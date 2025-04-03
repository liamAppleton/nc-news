import { MdDeleteOutline } from 'react-icons/md';
import { deleteComment } from '../../api';
import { useContext, useState } from 'react';
import { CommentsContext } from '../contexts/Comments';

export const DeleteButton = ({ commentId, setDeleted }) => {
  const { setCommentsUpdated } = useContext(CommentsContext);
  const [error, setError] = useState(false);

  const handleClick = () => {
    setDeleted(true);
    deleteComment(commentId)
      .then(() => {
        setCommentsUpdated('delete');
        setTimeout(() => setCommentsUpdated(null), 1000);
      })
      .catch(() => {
        setDeleted(false);
        setError(true);
        setTimeout(() => setError(false), 2000);
      });
  };

  return (
    <div className="d-flex align-items-center gap-1">
      {error && <p className="error-msg m-0">Unable to delete</p>}
      <MdDeleteOutline className="bin" size={20} onClick={handleClick} />
    </div>
  );
};
