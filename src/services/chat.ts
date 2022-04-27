import { request } from '@/utils/api';

// 获取登录票据
export function getSig() {
  return request('/chat/login', 'get');
}

// 创业者获取登录票据
export function getCustomerSig() {
  return request('/chat/customer/login', 'get');
}

// 项目方获取登录票据
export function getProjectSig() {
  return request('/chat/project/login', 'get');
}

// 获取聊天详情
export function getChatDetails(data: any) {
  return request('/chat/detail', 'post', data);
}
// 编辑聊天详情 {target, targetType, followed, interesting, invited, franchisee}
export function editChatDetails(data: any) {
  return request('/chat/update_chat', 'post', data);
}

// 删除聊天
export function deleteChat(data: any) {
  return request('/chat/delete', 'post', data);
}
// 置顶聊天
export function chatToTop(data: any) {
  return request('/chat/pin', 'post', data);
}

// 开始与项目方聊天
export function startWithProjectChat(id: any) {
  return request(`/chat/start_with_project/${id}`, 'get');
}
// 开始与创业者聊天
export function startWithCustomerChat(id: any) {
  return request(`/chat/start_with_customer/${id}`, 'get');
}
// 回复项目方
export function replyProjectChat(id: any) {
  return request(`/chat/reply_project/${id}`, 'get');
}
// 回复创业者
export function replyCustomerChat(id: any) {
  return request(`/chat/reply_customer/${id}`, 'get');
}

// 请求交换手机号
export function applyMobile(data: any) {
  return request('/chat/apply_mobile', 'post', data);
}
// 同意交换手机号
export function agreeMobile(data: any) {
  return request('/chat/agree_mobile', 'post', data);
}
// 拒绝交换手机号
export function rejectMobile(data: any) {
  return request('/chat/reject_mobile', 'post', data);
}
// 请求交换微信
export function applyWechat(data: any) {
  return request('/chat/apply_wechat', 'post', data);
}
// 同意交换微信
export function agreeWechat(data: any) {
  return request('/chat/agree_wechat', 'post', data);
}
// 拒绝交换微信
export function rejectWechat(data: any) {
  return request('/chat/reject_wechat', 'post', data);
}

// 查看过我的人
export function chatViewMe() {
  return request('/chat/view_me', 'post');
}

// 获取创业者信息
export function getCustomerInfoByUserId(data: any) {
  return request('/chat/customer', 'post', data);
}

// 获取项目方信息
export function getProjectInfoByUserId(data: any) {
  return request('/chat/project', 'post', data);
}

// 一键直达
export function sendApplication(data: any) {
  return request('/callAfters', 'post', data);
}

// 批量沟通 群发
// 获取群发消息
export function getGroupMsg(data: any) {
  return request('/groupMessages', 'get', data);
}

// 群发
export function sendGroupMsg(data: any) {
  return request('/groupSend/sendMessage', 'post', data);
}

// 通过群id 再发一次
export function sendGroupMsgById(data: any) {
  return request('/groupSend/sendMessageById', 'post', data);
}

// 获取群发
export function getGroupSend(id: any) {
  return request(`/groupSends/${id}`, 'get');
}

// 通过成员列表获取群发
export function getGroupMsgByUserList(data: any) {
  return request('/groupSend/byUserList', 'post', data);
}
