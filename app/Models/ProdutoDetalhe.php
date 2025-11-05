<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProdutoDetalhe extends Model
{
    protected $fillable = ['produto_id', 'comprimento', 'altura', 'largura', 'unidade_id'];

    public function produto(){
        return $this->belongsTo('App\Models\Produto');
        // belongsTo -> Pertence "a"
        // produto_detalhes pertence a produtos;

    }   
}

