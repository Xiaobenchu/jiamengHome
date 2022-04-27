import { request } from '../utils/api';

export function getCustomer() {
  return request('/customer/find', 'get');
}

export function editCustomer(data: any) {
  return request('/customer/update', 'post', data);
}

// 获取推荐创业者
export function getRecommendData(data: any) {
  return request('/customer/recommend', 'post', data);
}

// 获取最新创业者资料
export function getNewData(data: any) {
  return request('/customer/latest', 'post', data);
}

// 关注创业者
export function followCustomer(id: any) {
  return request(`/customer/follow/${id}`, 'get');
}
// 取消关注创业者
export function un_followCustomer(id: any) {
  return request(`/customer/un_follow/${id}`, 'get');
}
// 浏览创业者
export function customerView(id: any) {
  return request(`/customer/view/${id}`, 'get');
}
// 获取创业者信息
export function getCustomerById(id: any) {
  return request(`/customers/${id}`, 'get');
}

// 申请加盟列表
export function getApplication(data: any) {
  return request('/business/application', 'get', data);
}
// 看过我的创业者
export function getViewMe(data: any) {
  return request('/business/view_me', 'get', data);
}
// 我看过的创业者
export function getViewList(data: any) {
  return request('/business/view', 'get', data);
}
// 清空我浏览的创业者
export function getClear() {
  return request('/business/clear_view', 'get');
}
// 我关注的创业者
export function getFollowList(data: any) {
  return request('/business/my_follow', 'get', data);
}
// 关注我的创业者
export function getFollowMe(data: any) {
  return request('/business/follow_me', 'get', data);
}
// 我沟通过的创业者
export function getCustomerChat(data: any) {
  return request('/business/my_chat', 'get', data);
}
// 新创客
export function getNewerList(data: any) {
  return request('/customer/newer_list', 'get', data);
}
// 隐藏创业者可见
export function postVisible(data: any) {
  return request('/customer/visible', 'post', data);
}
