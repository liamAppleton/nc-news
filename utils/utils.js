export const dateFormatter = (date) => {
  const timeElapsed = (Date.now() - date.getTime()) / 1000;

  if (timeElapsed < 60) {
    return 'a few seconds ago';
  } else if (timeElapsed < 3600) {
    return `${Math.floor(timeElapsed / 60)} minutes ago`;
  } else if (timeElapsed < 86400) {
    return `${Math.floor(timeElapsed / 3600)} hours ago`;
  } else if (timeElapsed < 2_506_000) {
    return `${Math.floor(timeElapsed / 86_400)} days ago`;
  } else if (timeElapsed < 31_540_000) {
    return `${Math.floor(timeElapsed / 2_628_000)} months ago`;
  } else {
    return `${Math.round(timeElapsed / 31_540_000)} years ago`;
  }
};
