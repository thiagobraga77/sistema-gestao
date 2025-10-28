<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// o laravel faz para identificar o nome da tabela no banco 
//Site_Contato  
// site_contato
// site_contatos



// : A Factory (SiteContatoFactory) e o 
// Model (SiteContato) são conectados através do trait HasFactory dentro do arquivo do Model
// . Sem ele, o Model não encontra o método factory().

class SiteContato extends Model
{
  use HasFactory;
    // trabalhando no tinker;
    /*
    $contato = new \App\Models\SiteContato(); -> instanciado o objeto contato
    $contato->nome = 'Thiago'; atribuindo valores para as variáveis
    $contato->email = 'thiagobraga@gmail.com.br';
    print_r($contato->getAttributes()); -> mostra o array, com os valores que foram armazenados
    $contato->save(); -> salva as variáveis armazenadas no banco de dados

    */


    /*
    selecionando registros com where
    use \App\Models\SiteContato
    $contatos = SiteContato::where('nome_coluna', 'operador_comparação', 'valor');
    retorna um builder;
    para mostrar realmente precisa do ->get(); no final
    $contatos = SiteContato::where('nome_coluna', 'operador_comparação', 'valor')->get();


    Selecionando registros com whereIn
    use \App\Models\SiteContato;
    $contatos = SiteContato::whereIn('campo_a_ser_comparado_por_igual', 'conjunto_de_parametros');
    ex: 
    $contatos = SiteContato::whereIn('motivo_contato', [1, 3])->get();

    com whereNotIn -> 
    $contatos = SiteContato::whereNotIn('motivo_contato', [1, 3])->get();
    nós iremos fazer uma pesquisa em que selecionem todos os motivo_contato
    sejam diferentes de 1 e 3;


    selecionando registros com whereBetween(inclusivo)
    $contatos = SiteContato::whereBetween('motivo_contato', [valor_inicial, valor_final])->get();
    encontra os valores que estão entre um valor inicial e um valor final, além de ser inclusivo,
    ou seja, ele inclui os próprios valores inicial e final;
    ex:
    $contatos = SiteContato::whereBetween('motivo_contato', [1, 3])->get();

    com whereNotBetween(exclusivo)
    $contatos = SiteContato::whereNotBetween('motivo_contato', [valor_inicial, valor_final])->get();
    $contatos = SiteContato::whereNotBetween('motivo_contato', [2, 3])->get();
    ou seja ele vai procurar valores menores que 2 ou maiores que 3;


    Selecionando registros com dois ou mais wheres;
    $contatos = SiteContato::where('nome', '<>', 'Thiago')->whereIn('motivo_contato', [1,2])->get();
    pode colocar mais condições, se quiser; com o operador lógico and;

    Selecionando registros com orWhere;
    $contatos = SiteContato::where('nome', '<>', 'Fernando')->orWhereIn('motivo_contato', [1,2])->get();
    podemos colocar orWhereNotIn, orWhereBetween e etc;

    selecionando regsitros com whereNull() e whereNotNull();
     $contatos = SiteContato::whereNull('updated_at')->get(); 
      --> seleciona as que estão com valores null na coluna updated_at
    $contatos = SiteContato::whereNotNull('updated_at')->get();
      --> seleciona as que não estão com valores null na coluna updated_at


    selecionando registros com parâmetros do tipo data e hora  
    $contatos = SiteContato::whereDate('created_at', '2025-10-18')->get(); por data
    $contatos = SiteContato::whereDay('created_at', '31')->get(); pode ser por dia ;
    $contatos = SiteContato::whereMonth('created_at', '31')->get(); pode ser por mês ;
    $contatos = SiteContato::whereYear('created_at', '31')->get(); pode ser por ano ;
    $contatos = SiteContato::whereTime('created_at', '=' '15:07:51')->get(); pode ser pela hora(tem 3 parâmetros(coluna, operador, valor)) ;

    ex:
    $contatos = SiteContato::whereYear('created_at', '2025')->whereMonth('created_at', '10')->whereDay('created_at', '18')->get();

    Selecionando registros com whereColumn(); ele não compara valores null
     $contato = SiteContato::whereColumn('created_at', '>', 'updated_at')->get();


    Selecionando registros aplicando a precedência de operadores lógicos;
    $contatos = SiteContato::where(function($query) {
    $query->where('nome', 'Jorge')
          ->orWhere('nome', 'Ana');
    }
    )->where(function($query) {
        $query->whereIn('motivo_contato', [1, 2])
            ->orWhereBetween('id', [4, 6]);
    })->get();
    O código busca por contatos que se chamam 'Jorge' ou 'Ana' E que, ao mesmo tempo, 
    tenham o motivo de contato 1 ou 2 OU tenham um ID entre 4 e 6.
    
    all:[] -> significa que não encontrou nada
    */


    /*
    Ordenando registros;
    ascendente-> do menor para o maior
    descendente-> do maior para o menor
    $contatos = SiteContato::orderBy('nome', 'asc')->get();
    $contatos = SiteContato::orderBy('nome', 'desc')->get();
    */

    /*
    Collections
    é um objeto especial, que funciona como um 'super array', que
    armazena os resultados das consultas ao banco de dados que 
    retornam múltiplos modelos;
    $contatos = SiteContato::where('id', '>', '3')->get();
    $contatos->first(); ele retorna apenas o primeiro registro dessa coleção
    $contatos->last(); ele retorna apenas o último registro dessa coleção
    $contatos->reverse(); ele inverte a ordem dos elementos do array;

    Colection toArray e toJson;
    SiteContato::all()->toArray(); -> converte a coleção de dados para um array PHP;    
    SiteContato::all()->toJson(); -> converte a coleção de dados para uma string no formato JSON;

    Collection pluck
    permite resgatar valores de uma determinada chave;
    SiteContato::all()->pluck('email');
    SiteContato::all()->pluck('nome')->reverse();

    SiteContato::all()->pluck('email', 'nome');
      "Thiago" => "thiagobraga@gmail.com.br",
      "Chico" => "chico@gmail.com.br",
      "João" => "joao@contato.com.br",
      "Rosa" => "rosa@contato.com.br",
      "Fernando" => "fernando@contato.com.br",
      "André" => "andre@contato.com.br",
      "Ana" => "ana@contato.com.br",
      "Helena" => "helena@contato.com.br",
  
    */

      /* métodos nativos dos métodos collections
      documentação do laravel
      


      Atualizando registros
      $fornecedor = Fornecedor::find(1);
      $fornecedor->nome = 'Chico';
      print_r($fornecedor);
      $fornecedor->save();

      Atualizando registros com fill e save;
      $fornecedores2 = Fornecedor::find(2);
      $fornecedores2->fill(['nome' => 'nome123', 'email' => 'chico@gmail.com',
      'site' => 'site.com.br']);
      $fornecedores2->save();

        Atualizando registros com where e update;
        Fornecedor::whereIn('id', [1,2])->update(['nome' => 'Fornecedor Teste', 'site' => 'teste.com.br']);

      */

        /*
        Deletando registros com delete e destroy
        $contato = SiteContato::find(4);
        $contato->delete();   
        
        outra possibilidade;
        SiteContato::where('id', 7)->delete();

        outra possibilidade;
        SiteContato::destroy(5); podemos colocar outros id's separados por vírgulas;


        Deletando registros com SoftDelete;
        Softdelete -> em vez de apagar o registro no banco de dados, apenas o "marca como excluído".
        isso é feito com a coluna deleted_at com a data da exclusão. o registro continua no banco, mas fica 
        invisível nas consultas normais.

        $fornecedor = Fornecedor::find(2);
        $fornecedor->forceDelete();

        como selecionar e restaurar registros com SoftDelete
        mostrar registros que foram removidos também:
          deleted_at;
          Fornecedor::withTrashed()->get(); -> busca registros mesmo que tenham sido excluídos
          Fornecedor::onlyTrashed()->get(); -> busca registros mesmo estejam na lixeira;

          como restaurar
          Fornecedor::withTrashed()->get(); -> busca registros mesmo que tenham sido excluídos
          $fornecedores[0]->restore();

        */

        protected $fillable = ['nome', 'telefone', 'email', 'motivo_contatos_id', 'mensagem'];

}

/* 
Operadores:
> ;
>= ;
< ;
<=;
==; nesse caso, não é necessário colocar o ==
<> ;
like -> com base de uma parte de uma string , filtar uma pesquisa;
%palavra(antes da palavra) ou palavra%(depois da palavra);
podemos combinar também;
*/
