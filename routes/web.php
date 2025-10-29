<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ContatoController;
use App\Http\Controllers\FornecedorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\SobreNosController;
use App\Http\Controllers\TesteController;
use App\Http\Middleware\LogAcessoMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PrincipalController;

// Route::get('/', function(){
//     return 'Olá, estou aprendendo Laravel!';
// });

Route::get('/', [PrincipalController::class, 'principal'])->name('site.index')->middleware('log.acesso');

// Route::get('/', 'PrincipalController@principal');

Route::get('contato', [ContatoController::class, 'contato'])->name('site.contato');
// nome, categoria, assunto e mensagem

Route::get('/sobre-nos', [SobreNosController::class, 'sobrenos'])->name('site.sobrenos');

Route::get('/login1', [LoginController::class, 'index'])->name('site.login');
Route::post('/login1', [LoginController::class, 'autenticar'])->name('site.login');


Route::get('/contato', [ContatoController::class, 'contato'])->name('site.contato');
Route::post('/contato', [ContatoController::class, 'salvar'])->name('site.contato');

Route::middleware( 'autenticacao:padrao,visitante')->prefix('/app')->group(function(){
    Route::get('/home', [HomeController::class, 'index'])->name('app.home');
    Route::get('/sair', [LoginController::class, 'sair'])->name('app.sair');
    Route::get('/cliente', [ClienteController::class, 'index'])->name('app.cliente');
   
    Route::get('/fornecedor', [FornecedorController::class, 'index'])->name('app.fornecedor');
    Route::post('/fornecedor/listar', [FornecedorController::class, 'listar'])->name('app.fornecedor.listar');
    Route::get('/fornecedor/listar', [FornecedorController::class, 'listar'])->name('app.fornecedor.listar');
    Route::get('/fornecedor/adicionar', [FornecedorController::class, 'adicionar'])->name('app.fornecedor.adicionar');
    Route::post('/fornecedor/adicionar', [FornecedorController::class, 'adicionar'])->name('app.fornecedor.adicionar');
    Route::get('/fornecedor/editar/{id}/{msg?}', [FornecedorController::class, 'editar'])->name('app.fornecedor.editar');
    Route::get('/produto', [ProdutoController::class, 'index'])->name('app.produto');
});

Route::get('/teste/{p1}/{p2}', [TesteController::class, 'teste'])->name('teste');
    



Route::fallback(function(){
    echo 'A rota acessada não existe, <a href="' . route('site.index') . '">clique aqui</a> para ir para a página inicial';
});


// Route::get('/contato/{nome}/{categoria_id}',
//  function(string $nome = 'Desconhecido', int $categoria_id = 1 ){
//     echo 'Estamos aqui: '.$nome. ' - '.$categoria_id;
// })->where('categoria_id', '[0-9]+')->where('nome', '[A-Za-z]+');



Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
