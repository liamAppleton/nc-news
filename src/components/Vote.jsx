import { useState } from 'react';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from 'react-icons/bi';
import { patchVotesArticle } from '../../api';
import { CgDanger } from 'react-icons/cg';

export const Vote = ({ id: articleId, votes }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(votes);
  const [error, setError] = useState(false);

  const handleClick = (voteDirection) => {
    const newVotes = voteDirection === 'up' ? 1 : -1;
    setOptimisticVotes(optimisticVotes + newVotes);

    patchVotesArticle(articleId, newVotes).catch((err) => {
      setOptimisticVotes(votes);
      setError(true);
      setTimeout(() => setError(false), 2000);
    });
  };

  return (
    <div className="d-flex gap-3 align-items-center">
      <div className="d-inline-flex gap-1 align-items-center border rounded-pill p-1">
        <BiUpvote size={20} onClick={() => handleClick('up')} />
        <p className="fs-6 m-0 user-select-none" style={{ cursor: 'default' }}>
          {optimisticVotes}
        </p>
        <BiDownvote size={20} onClick={() => handleClick('down')} />
      </div>
      {error && (
        <p className="text-danger m-0" style={{ fontSize: '0.8rem' }}>
          Something went wrong
        </p>
      )}
    </div>
  );
};
