<?php

namespace App\Http\Controllers;

use App\Models\Produto;
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
        $produtos = Produto::paginate(10);
    
    return view('app.produto.index', ['produtos' => $produtos, 'request' => $request->all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // create -> exibir formulário de criação de registros
        $unidades = Unidade::all();
        return view('app.produto.create', ['unidades' => $unidades]);
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
        Produto::create($request->all());
        return redirect()->route('produto.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Produto $produto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produto $produto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produto $produto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produto $produto)
    {
        //
    }
}
/*
Controllers 

index() ->  Exibir lista de registros 
create() -> Exibir formulário de criação de registros
store() -> receber formulário de criação do registro
show() -> exibir registro específico
edit() -> exibir formulário de edição do registro
update() -> receber formulário de edição do registro
destroy() -> receber dados para remoção do registro
*/
