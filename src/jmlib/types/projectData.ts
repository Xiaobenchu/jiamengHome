import type { ProjectInterface } from './project';

// 项目数据
export interface ProjectDataInterface {
  id: number;

  // 资料完成度, 0-100
  progress: number;

  // 申请加盟数
  application: number;

  // 近30天申请人数
  past30Application: number;

  // 沟通中数量
  chat: number;

  // 未读消息数量
  unreadChat: number;

  // 被看过数量
  view: number;

  // 近30天访问
  past30View: number;

  // 曝光量
  show: number;

  // 关注的数量
  following: number;

  // 被项关注数量
  followed: number;

  // 我看过的
  viewing: number;

  // 盟币余额
  account: number;

  // 项目id
  projectId: number;

  project: ProjectInterface;
}
