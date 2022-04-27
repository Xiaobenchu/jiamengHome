import type {
  CategoryInterface,
  UserInterface,
  CompanyInterface,
  ProjectDataInterface,
  ReportInterface,
} from '.';
import type { ProjectFeature, FranchiseMode } from '../define/project';
import { VoucherInterface } from './voucher';

export interface ProjectInterface {
  id: number;

  // 企业ID
  companyId: number;

  // 用户id
  userId: number;

  // 品牌名称
  name: string;

  // 标题
  title: string;

  // 大分类ID
  bigCategoryId: number;

  // 小分类ID
  categoryId: number;

  category: CategoryInterface;

  // 简介
  brief: string;

  // logo
  logo: string;

  // 缩略图
  thumb: string;

  // 图片列表
  photoList: string[];

  // 视频列表
  videoList?: string[];

  user: UserInterface;

  company: CompanyInterface;

  // 认证星级: 0为非星级认证，3、4、5对应认证星级
  star: number;

  // 项目亮点
  feature: ProjectFeature[];

  // 最小费用，单位为万
  minCost: number;

  // 最大费用，单位为万
  maxCost: number;

  // 类型，0: 未选择； 1: 连锁加盟; 2: 分销代理;
  type: number;

  // 直营店数量
  directNumber: number;

  // 加盟店数量
  franchiseNumber: number;

  // 代理商数量
  agentNumber: number;

  // 加盟方式
  franchiseMode: FranchiseMode[];

  // 主营项目
  mainBusiness: string;

  // 品牌开始运营时间
  brandStartTime?: string;

  // 公司所在地
  address: string;

  // 联系方式
  contact: string;

  // 品牌详情介绍
  content: string;

  // 总费用
  cost: number;

  // 加盟费
  franchiseCost?: number;

  // 保证金
  deposit: number;

  // 设备费
  equipmentCost: number;

  // 其他费用
  otherCost: number;

  // 显示顺序，默认为0
  displayOrder: number;

  // 发布状态： 0: 未发布，1: 发布
  publishStatus: number;

  // 审核反馈
  feedback: string;

  // 首页推荐
  isHome: boolean;

  // top推荐
  isTop: boolean;

  // 热门推荐
  isHot: boolean;

  // 显示状态： 0: 未审核，1: 审核通过，2:审核未通过，3:隐藏
  status: number;

  seoTitle: string;

  seoKeywords: string;

  seoDescription: string;

  // 创建时间
  createdAt?: string;

  // 更新时间
  updatedAt?: string;

  // 项目数据
  projectData: ProjectDataInterface;

  // 报告
  report: ReportInterface;

  // 代金券信息
  voucher: VoucherInterface;

  // 是否关注
  follow?: boolean;

  // 是否已申请
  application?: boolean;

  starStartDate: string;

  starEndDate: string;
}
