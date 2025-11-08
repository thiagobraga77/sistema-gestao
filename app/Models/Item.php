<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'produtos';
    protected $fillable = ['nome','unidade', 'descricao', 'peso', 'unidade_id', 'fornecedor_id'];

    public function itemDetalhe(){
        return $this->hasOne('App\Models\ItemDetalhe', 'produto_id', 'id');

        // fk item_id
    }
    public function fornecedor(){
        return $this->belongsTo('App\Models\Fornecedor');
    }
    // Produto tem 1 produtoDetalhe
    // 1 registro relacionado em produto_detalhes (fk) -> produto_id
    // produtos (pk) -> id
    // hasOne -> é o lado pai que tem um único registro relacionado
    public function pedidos() {
        return $this->belongsToMany('App\Models\Pedido', 'pedidos_produtos', 'produto_id', 'pedido_id');

        /*
        3 - Representa o nome da FK da tabela mapeada pelo model na tabela de relacionamento
        4 - Representa o nome da FK da tabela mapeada pelo model no relacionameto que estamos implementando
        */
    }
}
