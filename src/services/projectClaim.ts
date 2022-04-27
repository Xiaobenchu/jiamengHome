import { request } from '@/utils/api';

// 创建项目认领
export function postProjectClaim(data: any) {
  return request('/claims', 'post', data);
}
