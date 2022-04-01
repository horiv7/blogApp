import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { ServerErrorsInterface } from 'src/app/shared/types/serverErrors.interface';
import { NewArticleAction } from '../../store/actions/newArticle.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';

@Component({
  selector: 'mc-create-article',
  templateUrl: './newArticle.component.html',
  styleUrls: ['./newArticle.component.scss'],
})
export class NewArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  isSubmitting$!: Observable<boolean | null>;
  validationErrors$!: Observable<ServerErrorsInterface | null>;
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(NewArticleAction({ articleInput }));
  }
}
