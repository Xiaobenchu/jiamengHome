import { CustomerInterface } from '.';

// 创业者关注项目方
export interface CustomerFollowInterface {
  id: number;

  // 创业者用户ID
  userId: number;

  // 项目ID
  projectId: number;

  // 是否已沟通
  chatted: boolean;

  createdAt: string;

  updatedAt: string;
  customer: CustomerInterface;
}
