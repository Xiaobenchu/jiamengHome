// 项目认领
export interface ClaimInterface {
  id: number;

  // 用户id
  userId: number;

  // 项目名称
  name: string;

  // 行业分类
  category: string;

  // 联系人
  contactor: string;

  // 联系电话
  phone: string;

  // 图片
  photo: string;

  // 回复
  reply: string;

  // 状态
  status: number;

  // 创建时间
  createdAt: string;

  // 更新时间
  updatedAt: string;
}
