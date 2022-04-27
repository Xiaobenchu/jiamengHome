// 创业者发起会话
export interface ChatByCustomerInterface {
  id: number;

  // 项目方用户ID
  projectUid: number;

  // 创业者用户ID
  customerUid: number;

  // 置顶
  top: boolean;

  // 备注
  remark: string;

  // 首次发起交流时间
  firstTime: string;

  // 最后一条信息时间
  lastMsgTime: string;
}
