import { CustomerInterface } from './customer';

// 创业者浏览项目方记录
export interface CustomerViewInterface {
  id: number;

  // 项目ID
  projectId: number;

  status?: number;

  chatted?: boolean;
  // 用户ID
  userId: number;

  createdAt: string;

  updatedAt: string;

  customer: CustomerInterface;
}
