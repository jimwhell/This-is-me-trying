<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
     protected $fillable = [
        'cover_url', 'title', 'yearReleased', 'album', 'genre_id' 
    ];

    public function artists()
    {
    return $this->belongsToMany(Artist::class, 'song_artists', 'song_id', 'artist_id')->withTimestamps();
    }

    public function posts() {
        return $this->belongsToMany(Post::class);
    }

    public function genre() {
        return $this->belongsTo(Genre::class);
    }
}
