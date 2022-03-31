import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { ServerErrorsInterface } from 'src/app/shared/types/serverErrors.interface';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE,
  //props<{ errors: ServerErrorsInterface }>()
);
