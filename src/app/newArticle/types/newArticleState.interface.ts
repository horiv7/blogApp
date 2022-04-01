import { ServerErrorsInterface } from 'src/app/shared/types/serverErrors.interface';

export interface NewArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: ServerErrorsInterface | null;
}
