<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
     protected $fillable = [
        'cover_url', 'title', 'yearReleased', 'album', 'artist_id', 'genre_id' 
    ];

    public function artists()
    {
    return $this->belongsToMany(Artist::class, 'song_artists')->withTimestamps();
    }
}
