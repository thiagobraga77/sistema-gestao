<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'produtos';
    protected $fillable = ['nome','unidade', 'descricao', 'peso', 'unidade_id'];

    public function itemDetalhe(){
        return $this->hasOne('App\Models\ItemDetalhe', 'produto_id', 'id');

        // fk item_id
    }
    // Produto tem 1 produtoDetalhe
    // 1 registro relacionado em produto_detalhes (fk) -> produto_id
    // produtos (pk) -> id
    // hasOne -> é o lado pai que tem um único registro relacionado
}
