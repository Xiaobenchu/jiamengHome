// 邀请好友
export interface InvitationInterface {
  id: number;

  // 用户ID
  userId: number;

  // 好友姓名
  name: string;

  // 好友手机号
  mobile: string;

  // 是否已发送短信
  send: boolean;

  // 链接被点击
  click: boolean;

  // 链接被点击时间
  clickTime: string;

  // 是否注册
  register: boolean;

  // 注册时间
  registerTime: string;

  // 被邀请人注册ID
  registerId: number;

  createdAt: string;

  updatedAt: string;
}
