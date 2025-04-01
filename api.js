import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://nc-news-app-e2hd.onrender.com/api',
});

const getArticles = async () => {
  const data = await apiClient.get('/articles');
  return data;
};

const getArticleById = async (articleId) => {
  const data = await apiClient.get(`/articles/${articleId}`);
  return data;
};

const getCommentsByArticleId = async (articleId) => {
  const data = await apiClient.get(`/articles/${articleId}/comments`);
  return data;
};

const patchVotesArticle = async (articleId, votes) => {
  await apiClient.patch(`/articles/${articleId}`, {
    inc_votes: votes,
  });
};

const patchVotesComment = async (commentId, votes) => {
  await apiClient.patch(`/comments/${commentId}`, { inc_votes: votes });
};

const postComment = async (articleId, { author, body }) => {
  await apiClient.post(`/articles/${articleId}/comments`, {
    username: author,
    body: body,
  });
};

const getUser = async (username) => {
  const data = apiClient.get(`/users/${username}`);
  return data;
};

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  patchVotesArticle,
  patchVotesComment,
  postComment,
  getUser,
};
