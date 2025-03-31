export const dateFormatter = (date) => {
  const timeElapsed = new Date() - date;
  if (timeElapsed < 59000) {
    return 'a few seconds ago';
  }
};
