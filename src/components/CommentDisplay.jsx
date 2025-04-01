import { useEffect, useState } from 'react';
import { CommentCard } from './CommentCard';
import { AddComment } from './AddComment';
import { Loading } from './Loading';
import { getCommentsByArticleId } from '../../api';

export const CommentDisplay = ({ articleId }) => {
  const [commentsForArticle, setCommentsForArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(articleId).then(({ data: { comments } }) => {
      setCommentsForArticle(comments);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="mb-3">
        <p>Comments</p>
      </div>
      <div className="mb-3">
        <AddComment articleId={articleId} />
      </div>
      <div className="row">
        {commentsForArticle.map((comment) => {
          return (
            <div
              key={comment.comment_id}
              className="col-12 d-flex justify-content-center mb-3"
            >
              <CommentCard comment={comment} />
            </div>
          );
        })}
      </div>
    </>
  );
};
