import { createContext, useState } from 'react';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [commentsUpdated, setCommentsUpdated] = useState(false);

  return (
    <CommentContext.Provider value={{ commentsUpdated, setCommentsUpdated }}>
      {children}
    </CommentContext.Provider>
  );
};
