export interface PaginatedResponse<T> {
  docs: T[];
  total: number;
  skip: number;
}
