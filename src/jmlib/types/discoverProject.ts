import { ProjectInterface } from './project';

// 发现项目榜单
export interface DiscoverProjectInterface {
  id: number;

  listId: number;

  projectId: number;

  isHot: boolean;

  isNew: boolean;

  displayOrder: number;

  createdAt: string;

  updatedAt: string;

  project: ProjectInterface;
}
