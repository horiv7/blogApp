import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

 import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { LoginRequestInterface } from "../../types/loginRequest.interface";
import { ServerErrorsInterface } from "src/app/shared/types/serverErrors.interface";


export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{request: LoginRequestInterface}>()
  );
  
  export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
  );
  
  export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{errors: ServerErrorsInterface}>()
  );