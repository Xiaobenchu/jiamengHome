// 审查门店
export interface ReportStoreInterface {
  id: number;

  // 项目id
  projectId: number;

  // 名称
  name: string;

  // 店铺名称
  storeName: string;

  // 调查时间
  dateline: string;

  // 店铺性质： 1: 直营店； 2: 加盟店
  type: number;

  // 店铺地址
  address: string;

  // 法人代表
  boss: string;

  // 注册日期
  regDateline: string;

  // 营业执照图片
  licensePhoto: string;

  // 国家企业信用截图
  creditSitePhoto: string;

  // 显示顺序，默认为0
  displayOrder: number;

  // 显示状态： 0: 未审核，1: 审核通过，2:审核未通过，3:隐藏
  status: number;

  createdAt: string;

  updatedAt: string;
}
