import { useEffect, useState } from 'react';
import { CommentCard } from './CommentCard';
import { AddComment } from './AddComment';
import { Loading } from './Loading';
import { getCommentsByArticleId } from '../../api';

export const CommentDisplay = ({ articleId }) => {
  const [commentsForArticle, setCommentsForArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentPosted, setCommentPosted] = useState(false);

  useEffect(() => {
    getCommentsByArticleId(articleId).then(({ data: { comments } }) => {
      setCommentsForArticle(comments);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="mb-3 d-flex justify-content-between position-relative">
        <p>Comments</p>
        {commentPosted && (
          <p
            className="text-success m-0 position-absolute end-0 bottom-0"
            style={{ fontSize: '0.8rem' }}
          >
            Post successful!
          </p>
        )}
      </div>
      <div className="mb-3">
        <AddComment articleId={articleId} setCommentPosted={setCommentPosted} />
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
