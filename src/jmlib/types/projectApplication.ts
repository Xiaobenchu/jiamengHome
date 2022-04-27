import type { UserGender } from '../define/customer';

// 项目申请
export interface ProjectApplicationInterface {
  id: number;

  // 项目id
  projectId: number;

  // 用户ID
  userId: number;

  // 昵称
  name: string;

  // 性别: 0: 未知； 1: 男；2: 女
  gender: UserGender;

  // 手机号
  mobile: string;

  // 留言
  msg: string;

  // 状态： 0: 未查看； 1: 未回复； 2: 已回复
  status: number;

  createdAt: string;

  updatedAt: string;
}
