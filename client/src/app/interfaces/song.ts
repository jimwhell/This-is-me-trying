import { Artist } from './artist';

export interface Song extends Artist {
  id: string;
  cover_url: string;
  title: string;
  yearReleased: string;
  album: string;
  genre_id: string;
  created_at: string;
  updated_at: string;
}
