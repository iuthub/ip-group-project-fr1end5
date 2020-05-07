<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quiz;

class QuizController extends Controller
{
    public function getAll()
    {
        return Quiz::all();
    }

    public function index()
    {
        return Quiz::where('userId', 1)->get();
    }

    public function show($id)
    {
        $quiz = Quiz::findOrFail($id);
        return $quiz;
    }

    public function store(Request $request)
    {
        $quiz = Quiz::create([
            'title' =>  $request->get('title'),
        ]);
        return response()->json($quiz, 201);
    }

    public function update($id,Request $request)
    {
        $quiz = Quiz::findOrFail($id);
        $quiz->update($request->all());
        return response()->json($quiz, 200);
    }

    public function delete($id)
    {
        Quiz::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
