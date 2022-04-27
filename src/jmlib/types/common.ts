export interface ListResponse<T> {
  total: number;
  list: T[];
  page: number;
  pageSize: number;
}
