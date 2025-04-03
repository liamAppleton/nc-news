import Lottie from 'lottie-react';
import mainLoading from '../assets/mainLoading.json';

export const Loading = () => {
  return (
    <div className="card-width">
      <Lottie animationData={mainLoading} />
    </div>
  );
};
