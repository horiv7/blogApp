import { GetArticleListResponseInterface } from './getArticleListResponse.interface';

export interface ArticleListStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetArticleListResponseInterface | null;
}
