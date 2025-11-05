<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemDetalhe extends Model
{
    protected $table = 'produto_detalhes';
    protected $fillable = ['produto_id', 'comprimento', 'altura', 'largura', 'unidade_id'];

    public function item(){
        return $this->belongsTo('App\Models\Item', 'produto_id', 'id');
        // fk item_id como referência
        // belongsTo -> Pertence "a"
        // produto_detalhes pertence a produtos;

    }   
}
