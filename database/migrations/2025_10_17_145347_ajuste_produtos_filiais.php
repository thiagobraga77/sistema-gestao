<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // criando a tabela filiais
        Schema::create('filiais', function(Blueprint $table){
            $table->id();
            $table->string('filial', 30);
            $table->timestamps(); // serve para registrar a data e a hora exata de criação ou modificação de um registro de banco de dados;

        });
        // criando a tabela produto_filiais
        Schema::create('produto_filiais', function(Blueprint $table){
            $table->id();
            $table->unsignedBigInteger('filial_id');
            $table->unsignedBigInteger('produto_id');
            $table->decimal('preco_venda', 8, 2); // 8-> número total de dígito(contanto tudo); 2-> número de casas decimais que o valor pode ter, após a vírgula;
            $table->integer('estoque_minimo');
            $table->integer('estoque_maximo');
            $table->timestamps(); // serve para registrar a data e a hora exata de criação ou modificação de um registro de banco de dados;

            //foreign key(constraints); integração entre os dados;
            $table->foreign('filial_id')->references('id')->on('filiais');
            $table->foreign('produto_id')->references('id')->on('produtos');
        });

        // removendo colunas da tabela produtos
        Schema::table('produtos', function(Blueprint $table){
            $table->dropColumn(['preco_venda', 'estoque_minimo', 'estoque_maximo']);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {   // é inverso, do atual até o antigo
        // adicionando colunas da tabela produtos
         Schema::table('produtos', function(Blueprint $table){
            $table->decimal('preco_venda', 8, 2);
            $table->integer('estoque_minimo');
            $table->integer('estoque_maximo');
        });
        // removendo a tabela produto_filiais
        Schema::dropIfExists('produto_filiais');
        // removendo a tabela filiais
        Schema::dropIfExists('filiais');

    }
};
