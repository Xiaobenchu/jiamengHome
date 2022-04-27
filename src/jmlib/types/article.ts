import { ProjectInterface } from '.';
import type { ArticleCategoryInterface } from './articleCategory';
import type { UserInterface } from './user';

// 新闻文章
export interface ArticleInterface {
  id: number;

  // 标题
  title: string;

  // 缩略图
  thumb: string;

  // 分类id
  articleCategoryId: number;

  articleCategory: ArticleCategoryInterface;

  // 用户id
  userId: number;

  user: UserInterface;

  // 作者
  author: string;

  // 作者头像
  authorAvatar: string;

  // 是否原创
  isOriginal: boolean;

  // 浏览数
  viewCount: number;

  // 收藏数
  collectionCount: number;

  // 点赞数
  likeCount: number;

  // 简介
  brief: string;

  // 内容
  content: string;

  // 显示顺序，默认为0
  displayOrder: number;

  // 显示状态： 0: 未审核，1: 审核通过，2:审核未通过，3:隐藏
  status: number;

  // 是否已点赞
  like?: boolean;

  // 是否已收藏
  collection?: boolean;

  // 创建时间
  createdAt?: string;

  // 更新时间
  updatedAt?: string;

  // 项目信息
  project?: ProjectInterface;
}
