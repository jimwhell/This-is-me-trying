import { Artist } from './artist';

export interface Song {
  id: number;
  cover_url: string;
  title: string;
  yearReleased: number;
  album: string;
  genre_id: string;
  created_at: string;
  updated_at: string;
  artists: Artist[];
}
