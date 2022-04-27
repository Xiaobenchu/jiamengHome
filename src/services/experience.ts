import { request } from '../utils/api';

export function getExperience() {
  return request('/experiences', 'get');
}

export function addExperience(data: any) {
  return request('/experiences', 'post', data);
}

export function editExperience(id: any, data: any) {
  return request(`/experiences/${id}`, 'put', data);
}

export function deleteExperience(id: any) {
  return request(`/experiences/${id}`, 'delete');
}
