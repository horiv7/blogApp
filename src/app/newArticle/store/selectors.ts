import {createSelector} from '@ngrx/store';
import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {NewArticleStateInterface} from '../types/newArticleState.interface';

export const newArticleFeatureSelector = (state: AppStateInterface) =>
  state.newArticle;

export const isSubmittingSelector = createSelector(
  newArticleFeatureSelector,
  (newArticleState: NewArticleStateInterface) =>
    newArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  newArticleFeatureSelector,
  (newArticleState: NewArticleStateInterface) =>
    newArticleState.validationErrors
);
