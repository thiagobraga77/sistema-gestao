<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiteContato>
 */
class SiteContatoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome' => $this->faker->name(), // gera um nome 
            'telefone' => $this->faker->tollFreePhoneNumber(),
            'email' => $this->faker->safeEmail(),
            'motivo_contatos_id' => $this->faker->numberBetween(1, 3),
            'mensagem' => $this->faker->text(200)
        ];
    }
}

// php artisan make:factory SiteContatoFactory --model=SiteContato
// faker está no github