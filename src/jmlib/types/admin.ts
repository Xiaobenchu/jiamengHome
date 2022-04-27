// 管理员
export interface AdminInterface {
  id: number;

  // 用户名
  username: string;

  // 真实姓名
  name: string;

  // email
  email: string;

  // 手机号
  mobile: string;

  // 头像
  avatar: string;

  // 密码
  password: string;

  lastLoginTime: string;

  createdAt?: string;

  updatedAt?: string;
}
