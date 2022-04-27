import type {
  AppraiserInterface,
  ProjectInterface,
  ReportStoreInterface,
} from '.';
import type {
  BusinessSupport,
  ChooseStoreAddress,
  DevelopTeamSize,
  OperationGuidance,
  StoreDesign,
  TrainingContent,
  TrainingMode,
} from '../define/project';

// 项目评估报告
export interface ReportInterface {
  id: number;

  // 项目id
  projectId: number;

  project: ProjectInterface;

  // 评估师id
  appraiserId: number;

  // 开始日期
  startDate: string;

  // 结束日期
  endDate: string;

  // 审查日期
  dateline: string;

  // 报告生成时间
  makeDateline: string;

  // 企业综合评估
  generalize: string;

  // 企业基本信息审查结果
  companyCheck: string;

  // 品牌投资总额
  capital: string;

  // 招商区域
  area: string;

  // 项目优势
  superiority: string;

  // 品牌审查结果
  brandCheck: string;

  // 销售网络审查结果
  saleNetCheck: string;

  // 店面选址
  chooseStoreAddress: ChooseStoreAddress[];

  // 装修设计
  storeDesign: StoreDesign[];

  // 培训方式
  trainingMode: TrainingMode[];

  // 培训内容
  trainingContent: TrainingContent[];

  // 经营支持
  businessSupport: BusinessSupport[];

  // 运营督导
  operationGuidance: OperationGuidance[];

  // 产品研发
  developTeamSize: DevelopTeamSize;

  // 加盟支持审查结果
  supportCheck: string;

  // 加盟考察建议
  reportSuggestion: string;

  createdAt: string;

  updatedAt: string;

  // 企业资质完整度
  completion: number;

  // 加盟网络覆盖度
  coverage: number;

  // 项目加盟扶持力度
  support: number;

  // 品牌影响力与成长性
  influence: number;

  // 评估师信息
  appraiser: AppraiserInterface;

  reportStores: ReportStoreInterface[];
}
