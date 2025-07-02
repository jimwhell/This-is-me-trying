import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { AccessTokenResponse } from '../interfaces/access-token-response';
import { Credentials } from '../interfaces/credentials';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly baseUrl: string = '/api/auth';

  constructor(private apiService: ApiService) {}

  //login method
  login(credentials: Credentials): Observable<AccessTokenResponse> {
    return this.apiService
      .post<Credentials, AccessTokenResponse>(
        `${this.baseUrl}/login`,
        credentials
      )
      .pipe(
        tap((response: AccessTokenResponse) => {
          this.setSession(response);
        })
      );
  }

  //set token id and expiration in local storage
  private setSession(authResult: AccessTokenResponse): void {
    localStorage.setItem('access_token', authResult.access_token);
  }

  getAccessToken(): string | undefined {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken === null) {
      console.error('Access token not found');
      return;
    }
    return accessToken;
  }
}
