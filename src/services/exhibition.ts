import { httpRequest } from '@/utils/api';

// 参选大牌
export async function getBigNameData(): Promise<any> {
  return httpRequest('/discover/project/3', 'get');
}

// 美食展区
export async function getFoodData(): Promise<any> {
  return httpRequest('/discover/project/94', 'get');
}
