// 评估师
export interface AppraiserInterface {
  id: number;

  // 名字
  name: string;

  // 头像
  avatar: string;

  // 级别： 1: 资深评估师
  level: number;

  createdAt: string;

  updatedAt: string;
}
