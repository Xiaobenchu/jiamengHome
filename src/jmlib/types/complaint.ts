// 投诉
export interface ComplaintInterface {
  id: number;

  // 用户id
  userId: number;

  // 项目id
  projectId: number;

  // 情况说明
  content: string;

  // 图片列表
  photos: string[];

  // 回复
  reply: string;

  // 状态: 状态: 1: 已处理, 0: 未处理
  status: number;

  // 创建时间
  createdAt: string;

  // 更新时间
  updatedAt: string;
}
