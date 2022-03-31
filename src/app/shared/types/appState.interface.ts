import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { ArticleListStateInterface } from '../modules/articleList/types/articleListState.interface';

export interface AppStateInterface {
  articleList: ArticleListStateInterface;
  auth: AuthStateInterface;
}
