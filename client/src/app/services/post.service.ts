import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly baseUrl: string = '/api/posts';

  constructor(private apiService: ApiService) {}

  getPosts(): Observable<Post[]> {
    return this.apiService.get<Post[]>(this.baseUrl);
  }
}
