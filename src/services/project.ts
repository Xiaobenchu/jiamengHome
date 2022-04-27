import { httpRequest } from '../utils/api';

// 获取项目
export function getProjectData(data: any) {
  return httpRequest('/projects', 'get', data);
}

// 获取热门项目列表
export function getHotProjectList(data: any) {
  return httpRequest('/project/hot', 'get', data);
}

// 获取我的项目
export function getMyProject() {
  return httpRequest('/project/my', 'get');
}

// 获取项目信息
export function getProjectInfo(id: any) {
  return httpRequest(`/projects/${id}`, 'get');
}

// 更新项目
export function updateProject(id: any, data: any) {
  return httpRequest(`/projects/${id}`, 'put', data);
}

// 关注项目
export function followProject(id: any) {
  return httpRequest(`/project/follow/${id}`, 'get');
}

// 取消关注项目
export function un_followProject(id: any) {
  return httpRequest(`/project/un_follow/${id}`, 'get');
}

// 申请项目
export function applyProject(id: any, data: any) {
  return httpRequest(`/project/apply/${id}`, 'post', data);
}

// 浏览项目
export function browseProject(id: any) {
  return httpRequest(`/project/view/${id}`, 'get');
}

// 项目排名
export function projectRank(id: any) {
  return httpRequest(`/project/rank/${id}`, 'get');
}

// 获取猜您喜欢的项目

export function recommendProject(id: any, data: any) {
  return httpRequest(`/project/recommend/${id}`, 'get', data);
}

// 获取首页推荐项目

export function homeRecommendProject(data: any) {
  return httpRequest('/project/home_recommend', 'get', data);
}

// 获取我的项目数据

export function myProjectData() {
  return httpRequest('/project/my_project_data', 'get');
}
