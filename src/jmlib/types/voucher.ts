import { ProjectInterface } from './project';

// 代金劵
export interface VoucherInterface {
  id: number;

  // 项目id
  projectId: number;

  // 金额
  amount: number;

  // 抢券开始时间
  startDate: Date;

  // 抢券截止时间
  endDate: Date;

  // 使用截止时间
  expireDate: string;

  // 总数
  total: number;

  // 已领取
  taken: number;

  // 剩余
  remain: number;

  // 当前用户是否已领用
  received?: boolean;

  // 显示状态： 0: 未审核，1: 审核通过，2:审核未通过，3:不显示
  status: number;

  createdAt?: string;

  updatedAt?: string;

  // 项目信息
  project?: ProjectInterface;
}
