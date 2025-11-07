<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    public function cliente()
    {
        return $this->belongsTo(\App\Models\Cliente::class);
    }
}
