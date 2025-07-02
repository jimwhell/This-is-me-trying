import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Post } from '../interfaces/post';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly baseUrl: string = '/api/posts';

  private postsSubject: BehaviorSubject<Post[] | null> = new BehaviorSubject<
    Post[] | null
  >(null);

  posts: Observable<Post[] | null> = this.postsSubject.asObservable();

  constructor(private apiService: ApiService) {}

  getPosts(): Observable<Post[]> {
    return this.apiService.get<Post[]>(this.baseUrl).pipe(
      tap((posts: Post[]) => {
        this.postsSubject.next(posts);
      })
    );
  }
}
