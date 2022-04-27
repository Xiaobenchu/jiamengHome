import type { CustomerInterface } from './customer';

// 创业者数据
export interface CustomerDataInterface {
  id: number;

  // 资料完成度, 0-100
  progress: number;

  // 申请加盟数
  application: number;

  // 沟通中数量
  chat: number;

  // 由你发起沟通数量
  chatByCustomer: number;

  // 向你发起沟通数量
  chatByProject: number;

  // 未读消息数量
  unreadChat: number;

  // 被看过数量
  view: number;

  // 看过的项目数量
  viewProject: number;

  // 关注的项目数量
  followProject: number;

  // 被项目关注数量
  followed: number;

  // 收藏的文章数量
  articleCollection: number;

  // 加盟代金券数量
  voucher: number;

  // 获得红包数量
  redPackage: number;

  // 红包总额
  redPackageTotal: number;

  // 账户余额
  account: number;

  // 我的邀请数量
  inviting: number;

  // 经验值，成长值
  experience: number;

  // 创业者id
  customerId: number;

  customer: CustomerInterface;
}
