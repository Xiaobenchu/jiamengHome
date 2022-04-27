// 创业者数据日统计
export interface CustomerDateStatInterface {
  id?: number;

  // 用户id
  userId: number;

  // 日期
  dateline: number;

  // 申请加盟数
  application: number;

  // 查看我
  view: number;

  // 沟通过
  chat: number;

  // 今日沟通数
  startChat: number;

  // 我查看
  viewing: number;

  // 双聊数
  chatBoth: number;

  // 关注我
  followed: number;

  createdAt?: string;

  updatedAt?: string;
}
