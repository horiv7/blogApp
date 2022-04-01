import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { EditArticleStateInterface } from 'src/app/editArticle/types/editArticleState.interface';
import { NewArticleStateInterface } from 'src/app/newArticle/types/newArticleState.interface';
import { ArticleListStateInterface } from '../modules/articleList/types/articleListState.interface';

export interface AppStateInterface {
  articleList: ArticleListStateInterface;
  auth: AuthStateInterface;
  article: ArticleStateInterface;
  newArticle: NewArticleStateInterface;
  editArticle: EditArticleStateInterface;
}
