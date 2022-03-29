import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { getArticleListAction } from '../../store/actions/getArticleList.action';
import { articleListSelector } from '../../store/selectors';
import { GetArticleListResponseInterface } from '../../types/getArticleListResponse.interface';

@Component({
  selector: 'bl-article-list',
  templateUrl: './articleList.component.html',
  styleUrls: ['./articleList.component.scss'],
})
export class ArticleListComponent implements OnInit {
  @Input('apiUrl')
  apiUrlProps!: string;
  articleList$!: Observable<GetArticleListResponseInterface | null>;
  constructor(private store: Store<AppStateInterface>) {}
  ngOnInit(): void {
    this.initialValues();
  }
  initialValues(): void {
    this.articleList$ = this.store.pipe(select(articleListSelector));
    this.fetchArticleList()
  }
  fetchArticleList() {
    this.store.dispatch(getArticleListAction({ url: this.apiUrlProps }));
  }
}
