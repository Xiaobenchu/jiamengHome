import type { UserInterface, ProjectInterface } from '.';
import type { CompanyType, TeamSize } from '../define/company';

export interface CompanyInterface {
  id: number;

  // 企业名称
  name: string;

  // 用户id
  userId: number;

  // 法定代表人
  legalPerson: string;

  // 统一社会信用代码
  licenseNum: string;

  // 企业类型
  type: CompanyType;

  // 国家
  country: string;

  // 省
  province: string;

  // 城市
  city: string;

  // 注册资本
  capital: string;

  // 注册地址
  registerAddress: string;

  // 经营地址
  address: string;

  // 参保人数
  insuranceNum: number;

  // 团队规模
  teamSize: TeamSize;

  // 年销售额
  yearSale: string;

  // 营业期限
  limit: string;

  // 开始经营时间
  startDate: string;

  // 登记机关
  registerDepartment: string;

  // 营业执照发照日期
  licenseDate: string;

  // 营业执照图片
  licensePhoto: string;

  // 身份证正面
  idCardFront: string;

  // 身份证背面
  idCardBack: string;

  // 国家企业信用截图
  creditSitePhoto: string;

  // 资质证书
  certifications: string[];

  // 入驻审核反馈
  feedback: string;

  // 状态: 未审核，已审核，审核不通过
  status: number;

  createdAt?: string;

  updatedAt?: string;

  user: UserInterface;

  project: ProjectInterface;
}
