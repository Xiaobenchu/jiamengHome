import { UserGender } from '../define/customer';

// 创业者的代金劵
export interface CustomerVoucherInterface {
  id: number;

  // 代金券id
  voucherId: number;

  // 项目id
  projectId: number;

  // 用户ID
  userId: number;

  // 是否已使用
  use: boolean;

  // 使用时间
  useTime: string;

  // 姓名
  username: string;

  // 性别
  gender: UserGender;

  // 手机号
  mobile: string;

  // 留言
  message: string;

  createdAt: string;

  updatedAt: string;
}
