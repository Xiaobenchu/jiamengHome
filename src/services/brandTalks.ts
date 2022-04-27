import { httpRequest } from '@/utils/api';

// 获取品牌说
export function getBrandTalksList(data: any) {
  return httpRequest('/brandTalks', 'get', data);
}
// 获取品牌说信息
export function getDiscoverProject(id: any) {
  return httpRequest(`/brandTalks/{id}/${id}`, 'get');
}

// 更新品牌说
export function updateDiscoverDetails(id: any, data: any) {
  return httpRequest(`/brandTalks/${id}`, 'put', data);
}

// 创建品牌说
export function addBrandTalks(data: any) {
  return httpRequest('/brandTalks', 'post', data);
}
