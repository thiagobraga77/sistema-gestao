<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(FornecedorSeeder::class);

        $this->call(MotivoContatoSeeder::class);
        $this->call(SiteContatoSeeder::class);
        // temos que fazer a chamada do motivo contato
// php artisan db:seed --class=SiteContatoSeeder
// comando só executa apenas o SiteContato

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
