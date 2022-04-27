import { request } from '@/utils/api';

// 获取代金劵
export function getVouchersList(data: any) {
  return request('/vouchers', 'get', data);
}

// 创建代金劵
export function postVouchers(data: any) {
  return request('/vouchers', 'post', data);
}

// 获取我的代金劵 商家自己
export function getMyCreateVouchers(data: any) {
  return request('/voucher/my', 'get', data);
}

// 下架代金劵
export function getHideVoucher(id: any) {
  return request(`/voucher/hide/${id}`, 'get');
}
// 上架代金劵
export function getShowVoucher(id: any) {
  return request(`/voucher/show/${id}`, 'get');
}

// 代金劵领取列表
export function getCustomerVoucherList(id: any) {
  return request(`/voucher/taken_list/${id}`, 'get');
}

// 项目方使用代金劵
export function useVoucherById(id: any) {
  return request(`/voucher/use/${id}`, 'get');
}

// 获取代金劵信息
export function getVouchersDetails(id: any) {
  return request(`/vouchers/${id}`, 'get');
}

// 更新代金劵
export function putVouchersDetails(id: any, data: any) {
  return request(`/vouchers/${id}`, 'put', data);
}

// 删除代金劵
export function deleteVouchersDetails(id: any) {
  return request(`/vouchers/${id}`, 'delete');
}

// 领取代金券
export function receiveVouchersDetails(id: any, data: any) {
  return request(`/voucher/take/${id}`, 'post', data);
}

// 我的优惠卷
export function getMyVouchers(data: any) {
  return request('/user/my_voucher', 'get', data);
}

// 梦想之翼报名
export function signDreamWings(data: any) {
  return request('/dreamWings', 'post', data);
}
