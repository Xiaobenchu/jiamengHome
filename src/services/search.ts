import { request } from '../utils/api';

// 获取项目搜索提示
export function getSearch_suggestion(data: any) {
  return request('/project/search_suggestion', 'get', data);
}
// 获取热门搜索项目
export function getHotSearch_project() {
  return request('/project/hot_search_project', 'get');
}
// 获取热门搜索关键字
export function getHotSearch_keyword() {
  return request('/project/hot_project_keyword', 'get');
}
// 搜索项目
export function getProjectList(data: any) {
  return request('/project/search', 'get', data);
}

// 搜索创业者 /customer/search
export function searchCustomerList(data: any) {
  return request('/customer/search', 'post', data);
}
