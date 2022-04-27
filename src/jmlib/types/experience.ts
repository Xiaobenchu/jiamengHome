import type { CustomerInterface } from './customer';

// 创业者创业经历
export interface ExperienceInterface {
  id: number;

  // 项目名称
  name: string;

  // 项目开始日期: 2018.01
  startDateline: string;

  // 项目结束日期: 2018.09
  endDateline: string;

  // 项目内容
  content: string;

  // 创建时间
  createdAt: string;

  // 更新时间
  updatedAt: string;

  customer: CustomerInterface;
}
