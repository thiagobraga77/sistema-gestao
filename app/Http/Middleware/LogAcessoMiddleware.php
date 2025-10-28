<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\LogAcesso;

class LogAcessoMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $ip = $request->server->get('REMOTE_ADDR');
        $rota = $request->getRequestUri();
        LogAcesso::create(['log' => "IP $ip requisitou a rota $rota"]);

        // CORREÇÃO:
        // Depois de salvar o log, deixe a requisição continuar para o Controller.
        // return $next($request);

        $resposta = $next($request);

        $resposta->setStatusCode(201, 'O staus da resposta e o texto da resposta foram modificados!!!');
        // intercepta a resposta que o controller estava enviando ao navegador;
        // ele modifica a middleware trocando o status para 201 created e adiciona um texto 
        return $resposta;
        // return $resposta;

        // A linha abaixo estava parando tudo, por isso foi removida:
        // return Response('Chegamos no middleware e finalizamos no próprio middleware');
    }
}