// import type ExperienceDetailsInterface from '../ExperienceDetails';
// export const experienceSource: Record<
//   { description: string; experience: number; timeType: "total" | "day" }
// > =

import { ExperienceDetailsInterface } from './experienceDetails';

export interface ExperienceValueInterface {
  // 注册
  register: ExperienceDetailsInterface;
  // 实名认证
  certification: ExperienceDetailsInterface;
  // 创业测评
  evaluation: ExperienceDetailsInterface;
  // 资料完善
  completeInfo: ExperienceDetailsInterface;
  // 每日申请加盟
  application: ExperienceDetailsInterface;
  // 每日沟通
  chat: ExperienceDetailsInterface;
  // 每日关注
  follow: ExperienceDetailsInterface;
  // 每日转发
  share: ExperienceDetailsInterface;
  // 每日签到
  sign: ExperienceDetailsInterface;
}
