import { ProjectInterface } from '.';
// 项目方浏览创业者记录
export interface ProjectViewInterface {
  id: number;

  // 用户ID
  userId: number;

  msg?: string;

  // 创业者ID
  customerId: number;

  dateline?: string;

  project: ProjectInterface;

  createdAt: string;

  updatedAt: string;

  follow: boolean;
  // 沟通状态
  chatted: boolean;
}
