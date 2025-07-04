<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
     protected $fillable = [
        'name'
    ];

    public function songs()
    {
    return $this->belongsToMany(Song::class, 'song_artists')->withTimestamps();
    }
}
