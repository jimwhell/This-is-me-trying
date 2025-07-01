import { Like } from './like';
import { Song } from './song';
import { User } from './user';

export interface Post extends User, Song, Comment, Like {
  id: string;
  content: string;
  user_id: string;
  song_id: string;
  created_at: string;
  updated_at: string;
}
