import { Action, createReducer, on } from '@ngrx/store';

import { NewArticleStateInterface } from '../types/newArticleState.interface';
import {
  NewArticleAction,
  NewArticleFailureAction,
  NewArticleSuccessAction,
} from './actions/newArticle.action';

const initialState: NewArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const newArticleReducer = createReducer(
  initialState,
  on(
    NewArticleAction,
    (state): NewArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    NewArticleSuccessAction,
    (state): NewArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    NewArticleFailureAction,
    (state, action): NewArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);
export function reducers(state: NewArticleStateInterface, action: Action) {
  return newArticleReducer(state, action);
}
