import Lottie from 'lottie-react';
import loadingSkeletons from '../assets/loadingSkeletons.json';

export const Loading = () => {
  return <Lottie animationData={loadingSkeletons} />;
};
