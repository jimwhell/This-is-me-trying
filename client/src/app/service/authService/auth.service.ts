import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data: {email:string, password:string}) {
  return this.http.post<{access_token: string}>('http://localhost:8000/login', data)
 .pipe(tap(res => localStorage.setItem('token', res.access_token)));
  }

  signup(data: {name:string, email:string, password:string}) {
    return this.http.post<{access_token: string}>('http://localhost:8000/login', data)
    .pipe(tap(res => localStorage.setItem('token', res.access_token)));
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken():string | null {
    return localStorage.getItem('token');
  }

  isLoggedin(): boolean {
    return !!this.getToken()
  }
}