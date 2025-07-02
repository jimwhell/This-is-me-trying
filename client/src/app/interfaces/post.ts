import { Artist } from './artist';
import { Like } from './like';
import { Song } from './song';
import { User } from './user';

export interface Post {
  id: string;
  content: string;
  user_id: string;
  song_id: string;
  created_at: string;
  updated_at: string;
  user: User;
  song: Song;
  comments: Comment[];
  likes: Like[];
}
