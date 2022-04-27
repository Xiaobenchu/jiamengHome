import { ProjectInterface } from './project';

// 发现项目榜单
export interface DiscoverListInterface {
  id: number;

  // 榜单名称
  name: string;

  type: number;

  // url: 线上展会需要提供展会地址
  url: string;

  // 是否显示类型名称
  showTypeName: boolean;

  // 图标
  icon: string;

  project?: ProjectInterface;

  createdAt: string;

  updatedAt: string;
}
