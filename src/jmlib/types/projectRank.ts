import { DiscoverListInterface, ProjectInterface } from '.';

export interface ProjectRankInterface {
  id: number;
  listId: number;
  projectId: number;
  isHot: boolean;
  isNew: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
  discoverList: DiscoverListInterface;
  project: ProjectInterface;
}
