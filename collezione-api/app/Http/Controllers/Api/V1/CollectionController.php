<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCollectionRequest;
use App\Http\Resources\V1\CollectionCollection;
use App\Http\Resources\V1\CollectionResource;
use App\Models\Collection;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function index(){
        return new CollectionCollection(Collection::all());
    }

    public function show(Collection $collection){
        return new CollectionResource($collection);
    }

    public function store(StoreCollectionRequest $request){
        Collection::create($request->validated());
        return response()->json("Skill Created");
    }

    public function update(StoreCollectionRequest $request, Collection $collection){
        $collection->update($request->validated());
        return response()->json("Skill updated");
    }

    public function destroy(Collection $collection){
        $collection->delete();
        return response()->json("CollectionItem Deleted!");
    }
}
