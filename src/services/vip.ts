import { request } from '../utils/api';

// 获取创业者任务
export function getTask() {
  return request('/customerTasks', 'get');
}
// 签到
export function getTaskSign() {
  return request('/customerTasks/sign', 'get');
}

// 转发
export function getTaskShare() {
  return request('/customerTasks/share', 'get');
}

// 完成测评
export function finishEvaluation() {
  return request('/customer/finish_evaluation', 'get');
}

// 完善资料
export function getTaskInfo() {
  return request('/customerTasks/completeInfo', 'get');
}

// 沟通任务
export function getTaskChat() {
  return request('/customerTasks/chat', 'get');
}

// 兑换VIP
export function getBuyVip(data: any) {
  return request('/customer/buy_vip', 'post', data);
}

// C端数据日统计
export function getUserDateStats(data: any) {
  return request('/user/date_stat', 'post', data);
}

// B端数据日统计
export function getBusinessDateStats(data: any) {
  return request('/business/date_stat', 'post', data);
}

// B端申请ViP
export function getCustomerVip() {
  return request('/business/apply_star', 'get');
}
