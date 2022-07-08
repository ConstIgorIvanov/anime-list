export interface FilterState {
  searchValue: string;
  currentPage: number;
  rating: string;
  status: string;

  sort: Sort;
}

export type Sort = {
  order: string;
  query: string;
};
