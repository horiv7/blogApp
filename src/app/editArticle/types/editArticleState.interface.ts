import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ServerErrorsInterface } from 'src/app/shared/types/serverErrors.interface';

export interface EditArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: ServerErrorsInterface | null;
  isLoading: boolean;
  article: ArticleInterface | null;
}
