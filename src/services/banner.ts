import { request } from '@/utils/api';

export function getNewsBanner() {
  return request('/banners?position=5', 'get');
}

export function getCategory() {
  return request('/category/top', 'get');
}

export function getBanner() {
  return request('/banners?position=1', 'get');
}
