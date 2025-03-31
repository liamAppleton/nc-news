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

export { getArticles, getArticleById };
