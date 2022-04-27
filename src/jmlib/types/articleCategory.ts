// 新闻文章分类
export interface ArticleCategoryInterface {
  id: number;

  // 分类名称
  name: string;

  // 父ID
  parentId: number;

  // 图标
  icon: string;

  // 显示顺序，默认为0
  displayOrder: number;

  // 显示状态： 1: 显示，0: 隐藏
  displayStatus: number;

  seoDescription: string;

  seoKeywords: string;

  seoTitle: string;

  // 创建时间
  createdAt?: string;

  // 更新时间
  updatedAt?: string;
}
