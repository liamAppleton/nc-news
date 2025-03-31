export const dateFormatter = (date) => {
  const timeElapsed = (Date.now() - date.getTime()) / 1000;

  if (timeElapsed < 60) {
    return 'a few seconds ago';
  } else if (timeElapsed < 60 * 60) {
    return `${Math.floor(timeElapsed / 60)} minutes ago`;
  }
};
