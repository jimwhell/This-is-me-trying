<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Post;
use App\Models\Song;
use App\Models\User;

use Illuminate\Http\Request;

class PostController extends Controller
{

    public function getAllPosts() {
        $posts = Post::with(['comments.user'])->get(); //retrieve all posts
        foreach ($posts as $post) {

            $post->user = $user = User::find($post->user_id); //find associated user with posts
       
            $song = Song::find($post->id);   //find related song to post id
            $song->artists = $song->artists; //attach artists associated with the song 
            $post->song = $song;  //attach song to iterated post
            
            $post->comments = $post->comments; //attach associated comments to post
            //attach the names of users in their respective comments
            foreach ($post->comments as $comment) {
                $comment->user = User::find($comment->user_id); 
            }

            $post->likes = $post->likes; //attach associated likes to post
            //attach users to their respective likes 
            foreach ($post->likes as $like) {
                $lke->user = User::find($comment->user_id);
            }
        }

        return response()->json($posts, 200);
    }

    
    public function createPost(Request $request) {
        $this->validate($request, [
            'content' => 'required|string',
            'yearReleased' => 'required|string',
            'album' => 'required|string',
            'cover_file' => 'required|image',
            'title' => 'required|string',
            'artistName' => 'required|string',
            'genreId' => 'required|exists:genres,id',
        ]);


        if (! $userId = auth()->user()->id) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        if ($request->hasFile('cover_file')) {
            $fileName = 'file' .time().'.'.$request->file('cover_file')->extension();
            $request->file('cover_file')->move('uploads', $fileName);
            $coverUrl = url('uploads/' . $fileName);
        }

         $artist = Artist::create([
            'name' => $request->artistName
        ]);

         $song = Song::create([
            'cover_url' => $coverUrl,
            'title' => $request->title,
            'yearReleased' => $request->yearReleased,
            'album' => $request->album,
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


    
}
