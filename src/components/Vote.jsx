import { useState } from 'react';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from 'react-icons/bi';
import { patchVotesArticle } from '../../api';

export const Vote = ({ id: articleId, votes }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(votes);

  const handleClick = (voteDirection) => {
    const newVotes = voteDirection === 'up' ? 1 : -1;
    setOptimisticVotes(optimisticVotes + newVotes);

    patchVotesArticle(articleId, newVotes).catch((err) => {
      setOptimisticVotes(votes);
    });
  };

  return (
    <div className="d-inline-flex gap-1 align-items-center border rounded-pill p-1">
      <BiUpvote size={20} onClick={() => handleClick('up')} />
      <p className="fs-6 m-0 user-select-none" style={{ cursor: 'default' }}>
        {optimisticVotes}
      </p>
      <BiDownvote size={20} onClick={() => handleClick('down')} />
    </div>
  );
};
