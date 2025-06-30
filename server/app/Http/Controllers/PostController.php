<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Post;
use App\Models\Song;
use Illuminate\Http\Request;

class PostController extends Controller
{
    
    public function createPost(Request $request) {
        $this->validate($request, [
            'content' => 'required|string',
            'yearReleased' => 'required|string',
            'album' => 'required|string',
            'cover_url' => 'required|string',
            'title' => 'required|string',
            'artistName' => 'required|string',
            'genreId' => 'required|exists:genres,id',
        ]);


        if (! $userId = auth()->user()->id) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }


        $artist = Artist::create([
            'name' => $request->artistName
        ]);


         $song = Song::create([
            'cover_url' => $request->cover_url,
            'title' => $request->title,
            'yearReleased' => $request->yearReleased,
            'album' => $request->album,
            'artist_id' => $artist->id,
            'genre_id' => $request->genreId
        ]);

        $song->artists()->attach($artist->id);

        $post = Post::create([
            'content' => $request->content,
            'user_id' => $userId,
            'song_id' => $song->id
        ]);
        
        return response()->json([
            'message' => 'Post created successfully',
            'post' => $post,
            'song' => $song,
            'artist' => $artist,
        ], 201);
    }


    public function getAllPosts() {

    }
}
