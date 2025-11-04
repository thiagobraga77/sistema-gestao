<?php

namespace App\Http\Controllers;

use App\Models\Unidade;
use Illuminate\Http\Request;
use App\Models\ProdutoDetalhe;

class ProdutoDetalheController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $unidades = Unidade::all();
        return view('app.produto_detalhe.create', ['unidades' => $unidades]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dadosValidados = $request->validate([
            'produto_id'  => 'required|integer', // Adicione 'exists:produtos,id' se quiser garantir que o ID do produto exista
            'comprimento' => 'required|numeric',
            'largura'     => 'required|numeric',
            'altura'      => 'required|numeric',
            'unidade_id'  => 'required|integer|exists:unidades,id', // Garante que a unidade exista
        ]);

        ProdutoDetalhe::create($dadosValidados);

        return redirect()->route('produto-detalhe.create')->with('sucesso', 'Cadastro realizado com sucesso!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProdutoDetalhe $produtoDetalhe)
    {
        $unidades = Unidade::all();
        
        return view('app.produto_detalhe.edit', ['produto_detalhe' => $produtoDetalhe, 'unidades' => $unidades]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProdutoDetalhe $produtoDetalhe)
    {
        // 1. Valide os dados
        $dadosValidados = $request->validate([
            'produto_id'  => 'required|integer',
            'comprimento' => 'required|numeric',
            'largura'     => 'required|numeric',
            'altura'      => 'required|numeric',
            'unidade_id'  => 'required|integer|exists:unidades,id',
        ]);

        $produtoDetalhe->update($dadosValidados);

        echo 'Atualização foi realizada com sucesso'; 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
