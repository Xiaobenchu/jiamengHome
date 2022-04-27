import type { CustomerInterface, CompanyInterface, ProjectInterface } from '.';

// 基础用户表
export interface UserInterface {
  id: number;

  uuid: string;

  // 昵称
  nickname: string;

  // 真实姓名
  realname: string;

  // 职位
  position: string;

  // email
  email: string;

  // 手机号
  mobile: string;

  // 用户角色: 1: 普通用户; 2: 入驻企业
  role: number;

  // 头像
  avatar: string;

  // 密码
  password: string;

  // 最后一次登录时间
  lastLoginTime: string;

  // 状态： 1: 正常； 2: 冻结； 3: 禁言
  status: number;

  createdAt?: string;

  updatedAt?: string;

  customer: CustomerInterface;

  company: CompanyInterface;

  project: ProjectInterface;
}
