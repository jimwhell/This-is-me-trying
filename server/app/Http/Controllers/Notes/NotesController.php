<?php

namespace App\Http\Controllers\Notes;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notes;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

// ------------------------------ GET ALL ----------------------------------------
  public function index()
{
    $notes = Notes::all();

    return response()->json([
        'status' => 'success',
        'status_code' => 200,
        'data' => $notes
    ], 200);

   
}

// ------------------------------ POST----------------------------------------
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $notes = new Notes();
        $notes->title = $request->title;
        $notes->description = $request->description;
        $notes->save();
        return response()->json([   
            'status' => 'success',
            'status_code' => 201,
            'data' => $notes
        ], 201);
    }

    
    // ------------------------------ GET ALL BY ID ---------------------------------
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $notes = Notes::find($id);

    return response()->json([
        'status' => 'success',
        'status_code' => 200,
        'data' => $notes
    ], 200);
    }

    // ------------------------------ UPDATE ----------------------------------------
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $notes = Notes::find($id);
        $notes->title = $request->title;
        $notes->description = $request->description;
        $notes->save();
        return response()->json([   
            'status' => 'success',
            'status_code' => 201,
            'data' => $notes
        ], 201);
    }

    // ------------------------------ DELETE ----------------------------------------
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $notes = Notes::find($id);
           $notes->delete();
           return response()->json([   
            'status' => 'success',
            'status_code' => 201,
            'data' => $notes
        ], 201);
    }
}
