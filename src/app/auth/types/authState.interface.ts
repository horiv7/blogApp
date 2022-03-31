import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { ServerErrorsInterface } from 'src/app/shared/types/serverErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean| null;
  isLoading: boolean | null;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: ServerErrorsInterface | null;
}
