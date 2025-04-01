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

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  patchVotesArticle,
};
