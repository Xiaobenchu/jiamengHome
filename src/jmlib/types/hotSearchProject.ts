// 项目搜索热门关键词（创业者搜索项目）
export interface HotSearchProjectInterface {
  id: number;

  // 项目id
  projectId: number;

  // 查看数
  view: number;

  // 是否热门
  isHot: boolean;

  // 是否new
  isNew: boolean;

  createdAt: string;

  updatedAt: string;
}
