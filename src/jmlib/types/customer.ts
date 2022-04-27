import type {
  UserInterface,
  CustomerDataInterface,
  ExperienceInterface,
} from '.';
import type { TeamSize } from '../define/company';
import type {
  UserGender,
  BusinessMode,
  StartupBudget,
  CustomerLabel,
  CustomerAttention,
  StartupDirection,
} from '../define/customer';

// 创业者
export interface CustomerInterface {
  id: number;

  // 真实姓名
  realname: string;

  // 是否使用简称，--目前是否显示真实姓名(真实姓名对外显示默认简称)
  useShort: boolean;

  // 是否可以访问
  visible: boolean;

  // 性别: 0: 未知； 1: 男；2: 女
  gender: UserGender;

  // 出生年月
  birthday: string;

  // 牛人介绍
  description: string;

  // 国家
  country: string;

  // 省份代码
  province: string;

  // 城市代码： 110100
  city: string;

  // // 区
  district: string;

  // 微信号
  wechat: string;

  // 个人标签
  label: CustomerLabel[];

  // 经营方式: 个人独资; 家族经营; 合伙经营;
  businessMode: BusinessMode;

  // 团队规模
  teamSize: TeamSize;

  // 创业预算
  startupBudget: StartupBudget;

  // 创业最看中
  attention: CustomerAttention[];

  // 创业方向
  startupDirection: StartupDirection[];

  // 创业行业：多个行业用,分割
  category: string;

  // 是否vip
  vip: boolean;

  // 是否认证
  certificated: boolean;

  // 审核信息
  verifyContent: string;

  // 状态：0: 未审核； 1: 审核通过； 2: 审核未通过
  status: number;

  createdAt: string;

  updatedAt: string;

  // 用户id
  userId: number;

  user: UserInterface;

  vipStartDate?: string;

  vipExpireDate?: string;

  customerData: CustomerDataInterface;

  // 创业项目经验
  experiences: ExperienceInterface[];
}
