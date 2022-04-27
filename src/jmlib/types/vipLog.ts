// vip兑换记录
export interface VipLogInterface {
  id: number;

  // 用户ID
  userId: number;

  // 有效期
  expireDate: string;

  // vip来源: 1: 10000成长兑换; 2: 88红包升级
  source: number;

  createdAt: string;

  updatedAt: string;
}
