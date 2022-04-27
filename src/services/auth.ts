import { request } from '../utils/api';

export function login(data: any) {
  return request('/auth/login', 'post', data).then((res) => {
    // setToken(res.token);
    return res;
  });
}

export function currentUser() {
  return request('/auth/current', 'get');
}

export function sendCode(data: any) {
  return request('/auth/send_code', 'post', data);
}

export function getPassword(data: any) {
  return request('/auth/retrieve_password', 'post', data);
}

export function loginByCode(data: any) {
  return request('/auth/code_login', 'post', data).then((res) => {
    // setToken(res.token);
    return res;
  });
}

export function loginByAccessToken(data: any) {
  return request('/auth/access_token', 'post', data).then((res) => {
    // setToken(res.token);
    return res;
  });
}

export function register(data: any) {
  return request('/auth/register', 'post', data);
}
//  我申请的项目
export function getApplication(data: any) {
  return request('/user/my_application', 'get', data);
}
//  我浏览的项目
export function getMyView(data: any) {
  return request('/user/my_view', 'get', data);
}
// 我关注的项目
export function getFollow(data: any) {
  return request('/user/my_follow', 'get', data);
}
// 关注我的项目
export function getFollowMe(data: any) {
  return request('/user/follow_me', 'get', data);
}
// 我沟通过的项目
export function getChat(data: any) {
  return request('/user/my_chat', 'get', data);
}
// 清空我浏览的项目

export function clearView() {
  return request('/user/clear_view', 'get');
}

// 当前账户信息

export function getMyData() {
  return request('/auth/current', 'get');
}
