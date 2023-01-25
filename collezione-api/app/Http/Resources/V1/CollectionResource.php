<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class CollectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title'=> $this->title,
            'description' => $this->description,
            'Build_Year' => $this->Build_Year,
            'Park' => $this->Park,
            'img' => $this->img,
            'userId' => $this->userId,
            'filter' => $this->filter
        ];
    }
}
