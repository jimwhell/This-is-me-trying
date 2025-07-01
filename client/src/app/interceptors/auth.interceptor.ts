import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.getAccessToken();

    if (authToken) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', authToken),
      });

      return next.handle(authReq);
    } else {
      console.error('Access token not found');
      return next.handle(request);
    }
  }
}
