<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

//usar trait em relação a orientação a objetos

// fornecedors
// fornecedores
// como corrigir
// protected $table = 'fornecedores';
class Fornecedor extends Model
{
    use SoftDeletes;
    
    protected $table = 'fornecedores';
    protected $fillable = ['nome', 'site', 'uf', 'email'];
    // define quais colunas do banco de dados podem ser preenchidas;
    // \App\Models\Fornecedor::create(['nome'=>'Fornecedor ABC', 'site'=>'fornecedorabc.com.br', 'uf'=>'SP', 
    // 'email'=>'contato@fornecedorabc.com.br']);

    // $fornecedores = \App\Models\Fornecedor::all();
    // esse comando recupera todos os registros do models fornecedor
    /*
    Pode ser assim também
    use \App\Models\Fornecedor;
    $fornecedores = Fornecedor::all();

    pode ser por foreach tbm
    */


    // selecionando registros com find();
    /* use \App\Models\Fornecedor;
     $fornecedores = Fornecedor::find(a primary key(id));
     echo $fornecedores2->nome;

     caso queira pesquisar mais de um id de uma vez;
     use \App\Models\Fornecedor;
     $fornecedores = Fornecedor::find([1, 2]);
     ou seja eu quero pesquisar o id 1 e 2;


     extra:
     foreach($fornecedores as $f) {echo $f->nome; echo ' - '; }
    */
    // hasMany -> tem muitos
    public function produtos() {
        return $this->hasMany('App\Models\Item', 'fornecedor_id', 'id');
        // return $this->hasMany('App\Models\Item');

    }

}
