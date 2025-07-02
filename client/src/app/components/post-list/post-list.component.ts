import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[] | null>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();

    this.posts$ = this.postService.posts.pipe(filter((post) => post !== null));
  }

  getPosts() {
    this.postService.getPosts().subscribe({
      next: (response) => {
        console.log('All posts: ', response);
      },
      error: (err) => {
        console.error('Error in retrieving posts: ', err);
      },
    });
  }
}
