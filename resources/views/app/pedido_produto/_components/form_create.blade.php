<form method="post" action="{{ route('pedido-produto.store', ['pedido' => $pedido]) }}">
    @csrf


    <select name="produto_id">
        <option>-- Selecione um Produto --</option>

        @foreach ($produtos as $produto)
            <option value="{{ $produto->id }}" {{ old('produto_id') == $produto->id ? 'selected' : '' }}>
                {{ $produto->nome }}
            </option>
        @endforeach
    </select>
    @error('produto_id')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <input type="number" name="quantidade" value="{{ 
    old('quantidade') ? old('quantidade') : '' }}" placeholder="Quantidade" class="borda-preta">
    
    @error('quantidade')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror

    <button type="submit" class="borda-preta">Cadastrar</button>

</form>
