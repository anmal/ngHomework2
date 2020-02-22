import {IShortRepoInfo} from './IShortRepoInfo';

export interface ISearchRepoResult {
  total_count: number;
  incomplete_result: boolean;
  items: IShortRepoInfo[];
}
