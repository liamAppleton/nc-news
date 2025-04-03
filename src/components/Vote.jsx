import { useState, useEffect } from 'react';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from 'react-icons/bi';
import { patchVotesComment, patchVotesArticle } from '../../api';

export const Vote = ({ id, votes, componentName }) => {
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);
  const [newVote, setNewVote] = useState(0);
  const [optimisticVotes, setOptimisticVotes] = useState(votes);
  const [error, setError] = useState(false);

  const handleUpClick = () => {
    if (downClicked) {
      setNewVote(2);
      setUpClicked((bool) => !bool);
      setDownClicked(false);
    } else {
      setNewVote(upClicked ? -1 : 1);
      setUpClicked((bool) => !bool);
    }
  };

  const handleDownClick = () => {
    if (upClicked) {
      setNewVote(-2);
      setDownClicked((bool) => !bool);
      setUpClicked(false);
    } else {
      setNewVote(downClicked ? 1 : -1);
      setDownClicked((bool) => !bool);
    }
  };

  useEffect(() => {
    setOptimisticVotes(optimisticVotes + newVote);

    if (componentName === 'CommentCard') {
      patchVotesComment(id, newVote)
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
    } else {
      patchVotesArticle(id, newVote)
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
    }
  }, [newVote]);

  return (
    <div className="d-flex gap-3 align-items-center">
      <div className="d-inline-flex gap-1 align-items-center border rounded-pill p-1">
        <BiUpvote
          className="vote-arrow vote-arrow-up"
          size={20}
          color={upClicked ? '#ff4500' : '#808080'}
          onClick={handleUpClick}
        />
        <p className="fs-6 m-0 user-select-none" style={{ cursor: 'default' }}>
          {optimisticVotes}
        </p>
        <BiDownvote
          className="vote-arrow vote-arrow-down"
          size={20}
          color={downClicked ? '#7193ff' : '#808080'}
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
