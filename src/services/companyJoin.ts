import { request } from '@/utils/api';
// 企业入驻
export function companyJoin(data: any) {
  return request('/auth/company_join', 'post', data).then((res) => {
    return res;
  });
}
