import { request } from '../utils/api';

export function editSendCode(data: any) {
  return request('/setting/send_code', 'post', data);
}
export function editMobile(data: any) {
  return request('/setting/change_mobile', 'post', data);
}
export function editPassword(data: any) {
  return request('/setting/change_password', 'post', data);
}
export function destroyAccount(data: any) {
  return request('/setting/destroy', 'post', data);
}
