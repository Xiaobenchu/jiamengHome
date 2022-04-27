import type { UserInterface } from './user';

// 用户反馈
export interface FeedbackInterface {
  id: number;

  // 用户id
  userId: number;

  // 内容
  content: string;

  // 图片
  photo: string;

  // 图标
  video: string;

  // 回复
  reply: string;

  // 状态
  status: number;

  // 创建时间
  createdAt: string;

  // 更新时间
  updatedAt: string;

  user: UserInterface;
}
