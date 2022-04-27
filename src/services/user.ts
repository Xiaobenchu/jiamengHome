import { request } from '../utils/api';

export function getCurrent() {
  return request('/auth/current', 'get');
}

// 关注我的项目
export function getProjectFollowMe(data: any) {
  return request('/user/follow_me', 'get', data);
}
// 看过我的项目
export function getProjectViewMe(data: any) {
  return request('/user/view_me', 'get', data);
}

// 新项目
export function getNewerProject(data: any) {
  return request('/project/latest', 'get', data);
}

// 记录用户活跃状态, 状态上报
export function getReportActive() {
  return request('/user/report_active', 'get');
}
