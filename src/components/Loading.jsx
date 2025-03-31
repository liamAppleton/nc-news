import Lottie from 'lottie-react';
import loadingSkeleton from '../assets/loadingSkeletons.json';

export const Loading = () => {
  return <Lottie animationData={loadingSkeleton} />;
};
