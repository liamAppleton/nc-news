import Lottie from 'lottie-react';
import loadingSkeleton from '../assets/loadingSkeletons.json';
import mainLoading from '../assets/mainLoading.json';

export const Loading = ({ componentName }) => {
  return (
    <div className="card-width">
      <Lottie
        animationData={
          componentName === 'ArticleDisplay' ? mainLoading : loadingSkeleton
        }
      />
    </div>
  );
};
