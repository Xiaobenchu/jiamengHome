import { request } from '../utils/api';

// 获取一级分类
export function getCategoryTopList() {
  return request('/category/top');
}

// 获取行业分类页面数据
export function getPageCategory() {
  return request('/page/category', 'get');
}

// 获取行业分类
export function getCategory() {
  return request('/categories', 'get');
}

// 获取以一级分类
export function getTopCategory() {
  return request('/category/top', 'get');
}

// 获取子分类
export function getChildrenCategory(id: any) {
  return request(`/category/${id}/children`, 'get');
}

export function getCategoryById(id: any) {
  return request(`/categories/${id}`, 'get');
}

// 轮播 banner
export function getBanner() {
  return request('/banners?position=1', 'get');
}
