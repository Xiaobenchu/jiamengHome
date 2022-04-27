// 经验(成长值)记录
export interface ExperienceLogInterface {
  id: number;

  // 用户ID
  userId: number;

  // 描述
  content: string;

  // 来源
  source: string;

  // 类型: 1: 收入； 2: 支出
  type: number;

  // 成长值
  experience: number;

  createdAt: string;

  updatedAt: string;
}
