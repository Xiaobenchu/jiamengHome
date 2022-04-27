// 项目分类
export interface CategoryInterface {
  id: number;

  // 分类名称
  name: string;

  // 父ID
  parentId: number;

  // 图标
  icon: string;

  // 是否推荐
  isRecommend: boolean;

  // 是否热门
  isHot: boolean;

  // 显示顺序，默认为0
  displayOrder: number;

  // 显示状态，0: 隐藏； 1: 显示；默认为1
  status: number;

  seoTitle: string;

  seoKeywords: string;

  seoDescription: string;

  // 创建时间
  createdAt?: string;

  // 更新时间
  updatedAt?: string;

  children: CategoryInterface[];
}
