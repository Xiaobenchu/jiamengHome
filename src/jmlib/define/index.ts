export const TargetTypeList: string[] = [
  'project',
  'invitation',
  'vip',
  'article',
];

export type TargetType = 'project' | 'invitation' | 'vip' | 'article';

export const StatusList: string[] = ['未审核', '已审核', '审核不通过'];

export const statusSelectEnum: Record<number, any> = {};
StatusList?.forEach((item, idx) => {
  statusSelectEnum[idx] = item;
});

export type ListResponse<T> = {
  page: 1;
  pageSize: 10;
  list: T[];
  total: 0;
};

export const emptyListResponse: ListResponse<any> = {
  page: 1,
  pageSize: 10,
  list: [],
  total: 0,
};
