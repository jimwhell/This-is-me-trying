import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  @Input() post!: Post;
}
