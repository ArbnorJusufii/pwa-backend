import { IUser } from './IUser';

export interface IUsers {
  data: IUser[];
  currentPage: number;
  previousPage?: number;
  nextPage?: number;
  totalPages: number;
  totalDocuments: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
