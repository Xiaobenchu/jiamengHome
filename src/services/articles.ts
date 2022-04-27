import { request } from '@/utils/api';

// 首页轮播图
export function getNewsBanner() {
  return request('/banners?position=5', 'get');
}
// 推荐文章
export function getRecommendArticles(data: any) {
  return request('/article/recommend', 'get', data);
}
// 获取文章详情
export function getArticles(data: any) {
  return request('/articles', 'get', data);
}
// 文章分类
export function getArticlesCategories() {
  return request('/article_categories', 'get');
}
// 文章详情
export function getArticlesDetails(id: any) {
  return request(`/articles/${id}`, 'get');
}
// 作者热文
export function getHotArticles(data: any) {
  return request('/article/hot_article', 'get', data);
}
// 文章点赞
export function getArticlesLike(id: any) {
  return request(`/article/like/${id}`, 'get');
}
// 取消点赞
export function getArticlesUnLike(id: any) {
  return request(`/article/un_like/${id}`, 'get');
}
// 文章收藏
export function getArticlesCollect(id: any) {
  return request(`/article/collect/${id}`, 'get');
}
// 取消收藏
export function getArticlesUnCollect(id: any) {
  return request(`/article/un_collect/${id}`, 'get');
}
// 浏览文章
export function getArticlesView(id: any) {
  return request(`/article/view/${id}`, 'get');
}
// 获取我上传的文章
export function getMyArticles(data: any) {
  return request('/article/my_articles', 'get', data);
}
// 删除文章
export function deleteArticles(id: any) {
  return request(`/articles/${id}`, 'delete');
}
// 隐藏文章
export function hideArticles(id: any) {
  return request(`/article/hide/${id}`, 'get');
}
// 显示文章
export function showArticles(id: any) {
  return request(`/article/show/${id}`, 'get');
}
// 发布文章
export function postArticles(data: any) {
  return request('/articles', 'post', data);
}
// 更新文章
export function putArticles(id: any, data: any) {
  return request(`/articles/${id}`, 'put', data);
}
