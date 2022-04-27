// Banner
export interface BannerInterface {
  id: number;

  // 标题
  title: string;

  // 图片地址
  photo: string;

  // 位置: 1: 首页；2: 分类首页；3: 二级分类首页；4:专区首页
  position: number;

  // 对象类型: 1: 项目；2: 新闻；3: 专题；4:活动；5: 广告
  targetType: number;

  // 对象id: 如果targetType为项目，则为项目id；是活动，则为活动id；
  targetId: number;

  // url
  url: string;

  // 背景色或者背景图片
  background: string;

  // 显示顺序，默认为0
  displayOrder: number;

  // 创建时间
  createdAt?: string;

  // 更新时间
  updatedAt?: string;
}
