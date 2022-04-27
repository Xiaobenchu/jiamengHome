import { request } from '../utils/api';

export function getCompanyData() {
  return request('/company/my', 'get');
}

export function editCompany(id: any, data: any) {
  return request(`/companies/${id}`, 'put', data);
}
