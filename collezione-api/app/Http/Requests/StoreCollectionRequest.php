<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCollectionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => ['required','min:3', 'max:30'],
            'description' => ['required', 'min:10', 'max:1000'],
            'Build_Year' => ['required'],
            'Park' => ['required'],
            'img' => ['required'],
            'userId' => ['required'],
            'filter' => ['required']
        ];
    }
}
