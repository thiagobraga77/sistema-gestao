@if (isset($pedido->id))
    <form method="post" action="{{ route('pedido.update', ['pedido' => $pedido->id]) }}">
        @csrf
        @method('PUT')
@else
    <form method="post" action="{{ route('pedido.store') }}">
        @csrf
@endif

    <select name="cliente_id">
        <option>-- Selecione um Cliente --</option>

        @foreach ($clientes as $cliente)
            <option value="{{ $cliente->id }}"
                {{ old('cliente_id', $pedido->cliente_id ?? '') == $cliente->id ? 'selected' : '' }}>
                {{ $cliente->nome }}
            </option>
        @endforeach
    </select>
    
    @error('cliente_id')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <button type="submit" class="borda-preta">Cadastrar</button>

</form>