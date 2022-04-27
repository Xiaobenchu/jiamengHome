// 项目数据日统计
export interface ProjectDateStatInterface {
  id?: number;

  // 用户id
  userId: number;

  // 日期
  dateline: string;

  // 申请加盟数
  application: number;

  // 我看过
  viewing: number;

  // 查看我
  view: number;

  // 沟通过
  chat: number;

  // 关注我
  followed: number;

  createdAt?: string;

  updatedAt?: string;
}
