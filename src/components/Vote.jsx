import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from 'react-icons/bi';

export const Vote = () => {
  return (
    <div className="d-inline-flex gap-1 align-items-center border rounded-pill p-1">
      <BiUpvote size={20} />
      <p className="fs-6 m-0">vote</p>
      <BiDownvote size={20} />
    </div>
  );
};
