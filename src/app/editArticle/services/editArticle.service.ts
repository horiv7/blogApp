import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { SaveArticleResponseInterface } from 'src/app/shared/types/saveArticleResponse.interface';
import { SaveArticleRequestInterface } from 'src/app/editArticle/types/saveArticleRequest.interface';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}
  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInputInterface> {
    const fullUrl = `${environment.apiUrl}articles/${slug}`;
    return this.http
      .put<SaveArticleResponseInterface>(fullUrl, this.convert(articleInput))
      .pipe(
        map((resp: SaveArticleResponseInterface) => {
          return resp.article;
        })
      );
  }
  convert(article: ArticleInputInterface): SaveArticleRequestInterface {
    let converted: SaveArticleRequestInterface;
    converted = {} as SaveArticleRequestInterface;
    converted = { ...converted, article };
    return converted;
  }
}
