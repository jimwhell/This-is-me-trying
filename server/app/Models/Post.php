<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable= [
        'content', 'user_id', 'song_id'
    ];

    public function user() {
    return $this->belongsTo(User::class);
   }

    public function comments() {
        return $this->hasMany(Comment::class);
    }

    public function likes() {
        return $this->hasMany(Like::class);
    }

    public function song() {
        return $this->belongsTo(Song::class);
    }

}
