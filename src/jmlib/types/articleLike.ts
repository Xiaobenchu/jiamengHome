import { ArticleInterface } from '.';

// 文章点赞
export interface ArticleLikeInterface {
  id: number;

  // 文章id
  articleId?: number;

  article?: ArticleInterface;

  // 用户ID
  userId: number;

  createdAt?: Date;

  updatedAt?: Date;
}
