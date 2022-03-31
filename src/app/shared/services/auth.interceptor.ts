import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './localStorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localStorageService.get('accessToken');
    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    });
    return next.handle(req);
  }
}
