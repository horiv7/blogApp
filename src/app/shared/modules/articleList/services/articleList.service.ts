import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {environment} from 'src/environments/environment';
import { GetArticleListResponseInterface } from '../types/getArticleListResponse.interface';
 
@Injectable()
export class ArticleListService {
  constructor(private http: HttpClient) {}

  getArticleList(url: string): Observable<GetArticleListResponseInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetArticleListResponseInterface>(fullUrl);
  }
}
