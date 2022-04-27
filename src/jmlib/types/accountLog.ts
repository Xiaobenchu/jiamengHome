import type { TargetType } from '../define';

// 账户变动记录
export interface AccountLogInterface {
  id: number;

  // 用户ID
  userId: number;

  // 描述
  content: string;

  // 关联对象类型: 项目, 邀请好友, vip
  targetType: TargetType;

  // 关联对象id
  targetId: number;

  // 类型: 1: 收入； 2: 支出
  type: number;

  // 金额
  amount: number;

  createdAt: string;

  updatedAt: string;
}
