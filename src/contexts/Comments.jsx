import { createContext, useState } from 'react';

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [commentsUpdated, setCommentsUpdated] = useState(null);

  return (
    <CommentsContext.Provider value={{ commentsUpdated, setCommentsUpdated }}>
      {children}
    </CommentsContext.Provider>
  );
};
