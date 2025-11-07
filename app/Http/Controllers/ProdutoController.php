<?php

namespace App\Http\Controllers;

use App\Models\Fornecedor;
use App\Models\Produto;
use App\Models\Item;
use App\Models\ProdutoDetalhe;
use App\Models\Unidade;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // index-> exibir lista de registros
        $produtos = Item::with(['itemDetalhe', 'fornecedor'])->paginate(10);
        /*
        foreach($produtos as $key => $produto){
            
            $produtoDetalhe = ProdutoDetalhe::where('produto_id', $produto->id)->first();

            if(isset($produtoDetalhe)){
                // print_r($produtoDetalhe->getAttributes());

                $produtos[$key]['comprimento'] = $produtoDetalhe->comprimento;
                $produtos[$key]['largura'] = $produtoDetalhe->largura;
                $produtos[$key]['altura'] = $produtoDetalhe->altura;

            }
        }
        */
    
    return view('app.produto.index', ['produtos' => $produtos, 'request' => $request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // create -> exibir formulário de criação de registros
        $unidades = Unidade::all();
        $fornecedores = Fornecedor::all();
        return view('app.produto.create', ['unidades' => $unidades, 'fornecedores' => $fornecedores]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // store -> Receber formulário de criação do registro
        // outra maneira:
        // $produto = new Produto();
        // $nome = $request->get('nome');
        // $descricao = $request->get('descricao');
        // $nome = strtoupper($nome);
        // $produto->nome = $nome;
        // $produto->descricao = $descricao;
        // $produto->save();
        $regras = [
            'nome' => 'required|min:3|max:40',
            'descricao' => 'required|min:3|max:2000',
            'peso' => 'required|integer',
            'unidade_id' => 'exists:unidades,id' // valor que existem na tabela unidades na coluna id

        ];
        $feedback = [
            'required' => 'O campo :attribute deve ser preenchido',
            'nome.min' => 'O campo nome deve ter no mínimo 3 caracteres',
            'nome.max' => 'O campo nome deve ter no máximo 40 caracteres',
            'descricao.min' => 'O campo descrição deve ter no mínimo 3 caracteres',
            'descricao.max' => 'O campo descrição deve ter no máximo 2000 caracteres',
            'peso.integer' => 'O campo peso deve ser um número inteiro',
            'unidade_id.exists' => 'A unidade de medida informada não existe', 
            'fornecedor_id.exists' => 'O fornecedor informado não existe'
        ];
        $request->validate($regras, $feedback);

        Item::create($request->all());
        return redirect()->route('produto.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Produto $produto)
    {
    // show() -> exibir registro específico
    
    return view('app.produto.show', ['produto' => $produto]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produto $produto)
    {
        // edit() -> exibir formulário de edição do registro
        $unidades = Unidade::all();
        $fornecedores = Fornecedor::all();
        return view('app.produto.edit', ['produto' => $produto, 'unidades' => $unidades, 'fornecedores' => $fornecedores]); 
        // return view('app.produto.create', ['produto' => $produto, 'unidades' => $unidades]); 

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $produto)
    {
        $regras = [
            'nome' => 'required|min:3|max:40',
            'descricao' => 'required|min:3|max:2000',
            'peso' => 'required|integer',
            'unidade_id' => 'exists:unidades,id', // valor que existem na tabela unidades na coluna id
            'fornecedor_id' => 'exists:fornecedores,id' // valor que existem na tabela unidades na coluna id

        ];
        $feedback = [
            'required' => 'O campo :attribute deve ser preenchido',
            'nome.min' => 'O campo nome deve ter no mínimo 3 caracteres',
            'nome.max' => 'O campo nome deve ter no máximo 40 caracteres',
            'descricao.min' => 'O campo descrição deve ter no mínimo 3 caracteres',
            'descricao.max' => 'O campo descrição deve ter no máximo 2000 caracteres',
            'peso.integer' => 'O campo peso deve ser um número inteiro',
            'unidade_id.exists' => 'A unidade de medida informada não existe',
            'fornecedor_id.exists' => 'O fornecedor informado não existe'

        ];
        $request->validate($regras, $feedback);
        // update() -> receber formulário de edição do registro
        // Put -> a requisição http deve atualizar o objeto completo
        // Patch -> atualizações parciais, atributos específicos
        $request->all(); //payload -> dados enviados em uma requisição http
        $produto; //instância do objeto no estado anterior
        $produto->update($request->all());
        return redirect()->route('produto.show', ['produto' => $produto->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produto $produto)
    {
        // Destroy -> receber dados para remoção do registro
        $produto->delete();
        return redirect()->route('produto.index', ['produto' => $produto->id]);
    }
}
/*
Controllers 

get -> index() ->  Exibir lista de registros 
get -> create() -> Exibir formulário de criação de registros
post -> store() -> receber formulário de criação do registro
get -> show() -> exibir registro específico
get -> edit() -> exibir formulário de edição do registro
put | patch -> update() -> receber formulário de edição do registro
delete -> destroy() -> receber dados para remoção do registro

create relacionado com store;
edit relacionado com update;
*/

/* 
Duas técnicas importantes para gerenciar um aplicativo que 
carrega relacionamentos entre modelos.

Lazy Loading -> Carregamento lento, preguiçoso. Carrega as relações apenas
quando são explicitamente acessadas. Exemplo, um Post com muitos comments, ele só 
serão carregados quando o acessamos.
Eager Loading -> Carregamento ansioso; Carrega as relações
muito antes de serem necessárias. Feito usando o with()
*/