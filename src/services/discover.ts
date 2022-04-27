import { request } from '@/utils/api';

// 获取发现项目榜单
export function getDiscoverList(type: any) {
  return request(`/discover/list?type=${type}`, 'get');
}
// 获取榜单内项目
export function getDiscoverProject(id: any, data: any) {
  return request(`/discover/project/${id}`, 'get', data);
}

// 获取发现项目榜单信息
export function getDiscoverDetails(id: any) {
  return request(`/discover/discover_list/${id}`, 'get');
}
