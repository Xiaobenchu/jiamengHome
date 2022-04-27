// 项目品牌说
export interface BrandTalkInterface {
  id: number;

  // 项目id
  projectId: number;

  // type: 1: "Boss说", 2: "员工说", 3: "代理商说", 4: "加盟商说"
  type: number;

  // 头像
  avatar: string;

  // 职位
  position: string;

  // 姓名
  name: string;

  // 内容
  content: string;

  createdAt: string;

  updatedAt: string;
}
