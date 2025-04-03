import { FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const CommentCount = ({ article }) => {
  return (
    <div className="d-flex gap-3 align-items-center">
      <div className="d-inline-flex gap-1 align-items-center border rounded-pill p-1">
        <Link
          to={`/articles/${article.article_id}`}
          className="d-flex align-items-center"
        >
          <FaRegComment
            color={'#808080'}
            size={20}
            className="m-0 comment-icon"
          />
        </Link>
        <p className="fs-6 m-0 user-select-none" style={{ cursor: 'default' }}>
          {article.comment_count}
        </p>
      </div>
    </div>
  );
};
