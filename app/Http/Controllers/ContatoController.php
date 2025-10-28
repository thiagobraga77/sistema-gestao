<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SiteContato;
use App\Models\MotivoContato;


class ContatoController extends Controller
{
    public function contato(Request $request){
        // var_dump($_POST);
        // dd($request);
        // echo '<pre>';
        // print_r($request->all());
        // echo '<br>';
        // echo $request->input('nome');
        
        // Gravando dados do formulário no banco de dados

        // $contato = new SiteContato();
        // $contato->nome = $request->input('nome') ?? 'não informado';
        // $contato->telefone = $request->input('telefone') ?? 'não informado';
        // $contato->email = $request->input('email') ?? 'não informado';
        // $contato->motivo_contato = $request->input('motivo_contato') ?? 0;
        // $contato->mensagem = $request->input('mensagem') ?? 'nenhuma mensagem';

        // outra maneira 
        // $contato = new SiteContato();
        // $contato->fill($request->all());
        // print_r($contato->getAttributes());
        // $contato->save();

        // print_r($contato->getAttributes());
        // $contato->save();
        $motivo_contatos = MotivoContato::all();

        return view('site.contato', ['titulo' => 'Contato ', 'motivo_contatos' => $motivo_contatos]);
    }
    public function salvar(Request $request){
        // realizar a validação dos dados do formulário recebido no request
        $regras = [
            'nome' => 'required|min:3|max:40|unique:site_contatos', //nomes com mínimo 3 caracteres e no máximo 40
            'telefone' => 'required',
            'email' => 'email', // validando campos e-mail
            'motivo_contatos_id' => 'required',
            'mensagem' => 'required|max:2000',
        ];
        
        $request->validate([
            'nome' => 'required|min:3|max:40|unique:site_contatos', //nomes com mínimo 3 caracteres e no máximo 40
            'telefone' => 'required',
            'email' => 'email', // validando campos e-mail
            'motivo_contatos_id' => 'required',
            'mensagem' => 'required|max:2000',
            
        ],

        $feedback = [
            'nome.min' => 'O campo nome precisa ter no mínimo 3 caracteres',
            'nome.max' => 'O campo nome deve ter no máximo 40 caracteres',
            'nome.unique' => 'O nome informado já está incluso',
            'email.email' => 'O email informado não é válido',
            'mensagem.max' => 'A mensagem deve ter no máximo 2000 caracteres',
            'required' => 'O campo :attribute precisa ser preenchido', // uma ideia para caso tenha muitas validações
            ''
        ]);

        $request->validate($regras, $feedback);
        // Persisitindo dados e redirecionando a rota;
        SiteContato::create($request->all());
        return redirect()->route('site.index');
        
    }
}
