// 项目方关注创业者记录
export interface ProjectFollowInterface {
  id: number;

  // 项目方用户ID
  userId: number;

  // 创业者ID
  customerId: number;

  // 是否已沟通
  chatted: boolean;

  createdAt: string;

  updatedAt: string;
}
