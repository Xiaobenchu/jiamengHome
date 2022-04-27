// 创业者搜索关键词（项目方搜索创业者）
export interface CustomerKeywordInterface {
  id: number;

  // 关键词
  keyword: string;

  // 搜索次数
  number: number;

  // 显示顺序，默认为0
  displayOrder: number;

  // 是否热门
  isHot: boolean;

  // 是否new
  isNew: boolean;

  createdAt: string;

  updatedAt: string;
}
