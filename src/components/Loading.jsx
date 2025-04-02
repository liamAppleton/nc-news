import Lottie from 'lottie-react';
import loadingSkeleton from '../assets/loadingSkeletons.json';
import mainLoading from '../assets/mainLoading.json';

export const Loading = ({ componentName }) => {
  let animation;
  if (componentName === 'ArticleDisplay') animation = mainLoading;
  if (componentName === 'Card') animation = loadingSkeleton;

  return (
    <div className="card-width">
      <Lottie animationData={animation} />
    </div>
  );
};
