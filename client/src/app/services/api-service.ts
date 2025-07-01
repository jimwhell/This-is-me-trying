import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  get<TResponse>(url: string): Observable<TResponse> {
    return this.httpClient.get<TResponse>(`${this.baseUrl}${url}`);
  }

  post<TRequest, TResponse>(
    url: string,
    body: TRequest
  ): Observable<TResponse> {
    return this.httpClient.post<TResponse>(`${this.baseUrl}${url}`, body);
  }
}
