import { DiscoverListInterface } from './discoverList';
import { ProjectInterface } from './project';

// 项目榜单
export interface ListProjectInterface {
  id: number;

  // 榜单id
  listId: number;

  // 项目ID
  projectId: number;

  // 是否热门
  isHot: boolean;

  // 是否new
  isNew: boolean;

  // 项目信息
  project?: ProjectInterface;

  // 榜单信息
  discoverList?: DiscoverListInterface;

  createdAt: string;

  updatedAt: string;

  // 项目排名
  displayOrder: number;
}
