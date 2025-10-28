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
        // create -> cria uma nova tabela no banco de dados;
        // table -> modifica uma tabela existente no banco de dados;

        // adicionando a coluna motivo_contato_id;
        Schema::table('site_contatos', function (Blueprint $table) {
            $table->unsignedBigInteger('motivo_contatos_id');
        });

        // migrando os dados de motivo_contato para motivo_contato_id;
        // statement -> permite executarmos uma query no banco de dados;
        //query -> é um comando ou solicitação feita a um banco de dados;

        // O que faz?
        // Atribuindo motivo_contato para a nova coluna motivo_contatos_id
        DB::statement('update site_contatos set motivo_contatos_id = motivo_contato');

        // criando da fk e removendo a coluna motivo_contato
        Schema::table('site_contatos', function (Blueprint $table) {
            $table->foreign('motivo_contatos_id')->references('id')->on('motivo_contatos');
            $table->dropColumn('motivo_contato');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {   
        // criar a coluna motivo_contato e removendo a fk
        Schema::table('site_contatos', function (Blueprint $table) {
            $table->integer('motivo_contato');
            $table->dropforeign('site_contatos_motivo_contatos_id_foreign');

        });
        // Atribuindo motivo_contatos_id para a nova coluna motivo_contato
        DB::statement('update site_contatos set motivo_contato = motivo_contatos_id');

        // removendo a coluna motivo_contato_id;
        Schema::table('site_contatos', function (Blueprint $table) {
            $table->dropColumn('motivo_contatos_id');
        });


        // constraint(restrição) -> é uma regra definida no banco de dados para garantir 
        // a integridade e a validade dos dados.
    }

    /* 
        foreign key -> é uma coluna em uma tabela que estabelece um vínculo
        com a Primary key de outra tabela
    */
};


// -- criar fk em motivo_contato apontando para id da tabela motivo_contato
// -- Alterar o nome da coluna para motivo_contatos_id e aplicar a fk apontando para a coluna id da tabela motivos_contatos;
// -- criar a coluna motivo_contatos_id, migrar os dados de motivo_contato 
// -- para motivo_contatos_id, aplicar a fk em motivo_contatos_id apontando para coluna id da tabela motivo_contatos e por fim remover a coluna motivo_contato;