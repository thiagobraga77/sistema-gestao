<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class LoginController extends Controller
{
    public function index(Request $request){
        $erro = '';
        
        if($request->get('erro') == 1){
            $erro = 'Usuário e senha não existe!';
        }

        if($request->get('erro') == 2){
            $erro = 'Necessário realizar login para ter acesso a página';
        }

        return view('site.login', ['titulo' => 'Login', 'erro' => $erro]);
    }
    public function autenticar(Request $request){

        // regras de validação;
        $regras = [
            'usuario' => 'email',
            'senha' => 'required'
        ];

        // as mensagens de feedback de validação
        $feedback = [
            'usuario.email' => 'O campo usuário(e-mail) é obrigatório',
            'senha.required' => 'O campo senha é obrigatório'
        ];
        $request->validate($regras, $feedback);
        // valida os dados enviados pelo usuário(que estão no request) 
        // usando os conjuntos de regras;
        // se a validação passar: o código continua;
        // se a validação falhar: o laravel para a execução, redireciona ao formulário 
        //  e exibe as mensagens de erros do $feedback
        
        // recuperamos os parâmetros do formulário
        $email = $request->get('usuario');
        $password = $request->get('senha');

        // $request -> serve para capturar e carregar todas as informações
        // que o usuário envia ao servidor
        

        // iniciar o Model User

        $user = new User();

        $usuario = $user->where('email', $email)->where('password')->get()->first();
        $usuario = $user->where('email', $email)->where('password', $password)->get()->first();
        if(isset($usuario)){
            session_start();
            $_SESSION['nome'] = $usuario->name; // guarda o nome do usuário na memória
            $_SESSION['email'] = $usuario->email;

            return redirect()->route('app.home');
        } else{
            return redirect()->route('site.login', ['erro' => 1]); // redireciona o get
        }
    }
    public function sair(){
        session_destroy();
        return redirect()->route('site.index'); // redireciona o get
    }

}
