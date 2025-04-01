import { useState, useEffect } from 'react';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from 'react-icons/bi';
import { patchVotesArticle } from '../../api';

export const Vote = ({ id: articleId, votes }) => {
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);
  const [newVote, setNewVote] = useState(0);
  const [optimisticVotes, setOptimisticVotes] = useState(votes);
  const [error, setError] = useState(false);

  const handleUpClick = () => {
    setNewVote(upClicked ? -1 : 1);
    setUpClicked((bool) => !bool);
    if (downClicked) setDownClicked(false);
  };

  const handleDownClick = () => {
    setNewVote(downClicked ? 1 : -1);
    setDownClicked((bool) => !bool);
    if (upClicked) setUpClicked(false);
  };

  useEffect(() => {
    setOptimisticVotes(optimisticVotes + newVote);
    patchVotesArticle(articleId, newVote)
      .catch(() => {
        setOptimisticVotes(votes);
        setUpClicked(false);
        setDownClicked(false);
        setError(true);
        setTimeout(() => setError(false), 2000);
      })
      .finally(() => {
        setNewVote(0);
      });
  }, [newVote]);

  return (
    <div className="d-flex gap-3 align-items-center">
      <div className="d-inline-flex gap-1 align-items-center border rounded-pill p-1">
        <BiUpvote
          size={20}
          color={upClicked ? '#ff4500' : undefined}
          onClick={handleUpClick}
        />
        <p className="fs-6 m-0 user-select-none" style={{ cursor: 'default' }}>
          {optimisticVotes}
        </p>
        <BiDownvote
          size={20}
          color={downClicked ? '#7193ff' : undefined}
          onClick={handleDownClick}
        />
      </div>
      {error && (
        <p className="text-danger m-0" style={{ fontSize: '0.8rem' }}>
          Something went wrong
        </p>
      )}
    </div>
  );
};
