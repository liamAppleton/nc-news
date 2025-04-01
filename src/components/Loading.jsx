import Lottie from 'lottie-react';
import loadingSkeleton from '../assets/loadingSkeletons.json';
import mainLoading from '../assets/mainLoading.json';

export const Loading = ({ componentName }) => {
  return (
    <Lottie
      animationData={
        componentName === 'ArticleDisplay' ? mainLoading : loadingSkeleton
      }
    />
  );
};
