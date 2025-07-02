<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Post;
use App\Models\Song;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{

    public function getAllPosts() {
        try {
            $posts = Post::with('user', 'song.artists', 'song.genre', 'comments', 'likes')->get();

            
            return response()->json($posts, 200);
        }
        catch(\Exception $e) {
            Log::error('Error fetching posts: ' . $e->getMessage());

             return response()->json([
            'error' => 'Failed to fetch posts', 'message' => $e->getMessage()], 500);
        }
    }

    
    public function createPost(Request $request) {
        $this->validate($request, [
            'content' => 'required|string',
            'yearReleased' => 'required|string',
            'album' => 'required|string',
            'coverFile' => 'required|image',
            'title' => 'required|string',
            'artistName' => 'required|string',
            'genreId' => 'required|exists:genres,id',
        ]);


        if (! $userId = auth()->user()->id) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        try {

            if ($request->hasFile('coverFile')) {
            $fileName = 'file' .time().'.'.$request->file('coverFile')->extension();
            $request->file('coverFile')->move('uploads', $fileName);
            $coverUrl = url('uploads/' . $fileName);
        }

        $song = Song::where('title', $request->title)->whereHas('artists', function ($query) use ($request) {
            $query->where('name', $request->artistName);
        })->with('artists')->first();
        
        if (!$song) {
            $artist = Artist::firstOrCreate([
            'name' => $request->artistName
            ]);


            $song = Song::firstOrCreate([
            'cover_url' => $coverUrl,
            'title' => $request->title,
            'yearReleased' => $request->yearReleased,
            'album' => $request->album,
            'genre_id' => $request->genreId
        ]);

            $song->artists()->attach($artist->id);

        }
        else
        {
            $artist = $song->artists;
        }

        $post = Post::create([
            'content' => $request->content,
            'user_id' => $userId,
            'song_id' => $song->id
        ]);
        
        return response()->json([
            'message' => 'Post created successfully',
            'post' => $post,
        ], 201);

        }
        catch(\Exception $e) {
            Log::error('Error creating post: ' . $e->getMessage());
            return response()->json([
                'error' => 'Failed to create post',
                'message' => $e->getMessage()
            ], 500);
        }

       
    }


    
}
