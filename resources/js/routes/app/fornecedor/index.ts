import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
export const listar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listar.url(options),
    method: 'post',
})

listar.definition = {
    methods: ["post"],
    url: '/app/fornecedor/listar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar.url = (options?: RouteQueryOptions) => {
    return listar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
const listarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: listar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: listar.url(options),
    method: 'post',
})

listar.form = listarForm

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
export const listar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listar.url(options),
    method: 'get',
})

listar.definition = {
    methods: ["get","head"],
    url: '/app/fornecedor/listar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar.url = (options?: RouteQueryOptions) => {
    return listar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listar.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: listar.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
const listarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listar.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listar.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

listar.form = listarForm

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
export const adicionar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adicionar.url(options),
    method: 'get',
})

adicionar.definition = {
    methods: ["get","head"],
    url: '/app/fornecedor/adicionar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar.url = (options?: RouteQueryOptions) => {
    return adicionar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adicionar.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adicionar.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
const adicionarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adicionar.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adicionar.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adicionar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

adicionar.form = adicionarForm

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
export const adicionar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adicionar.url(options),
    method: 'post',
})

adicionar.definition = {
    methods: ["post"],
    url: '/app/fornecedor/adicionar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar.url = (options?: RouteQueryOptions) => {
    return adicionar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adicionar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
const adicionarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: adicionar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: adicionar.url(options),
    method: 'post',
})

adicionar.form = adicionarForm

/**
* @see \App\Http\Controllers\FornecedorController::editar
* @see app/Http/Controllers/FornecedorController.php:67
* @route '/app/fornecedor/editar/{id}/{msg?}'
*/
export const editar = (args: { id: string | number, msg?: string | number } | [id: string | number, msg: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editar.url(args, options),
    method: 'get',
})

editar.definition = {
    methods: ["get","head"],
    url: '/app/fornecedor/editar/{id}/{msg?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FornecedorController::editar
* @see app/Http/Controllers/FornecedorController.php:67
* @route '/app/fornecedor/editar/{id}/{msg?}'
*/
editar.url = (args: { id: string | number, msg?: string | number } | [id: string | number, msg: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            msg: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "msg",
    ])

    const parsedArgs = {
        id: args.id,
        msg: args.msg,
    }

    return editar.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{msg?}', parsedArgs.msg?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::editar
* @see app/Http/Controllers/FornecedorController.php:67
* @route '/app/fornecedor/editar/{id}/{msg?}'
*/
editar.get = (args: { id: string | number, msg?: string | number } | [id: string | number, msg: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editar.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::editar
* @see app/Http/Controllers/FornecedorController.php:67
* @route '/app/fornecedor/editar/{id}/{msg?}'
*/
editar.head = (args: { id: string | number, msg?: string | number } | [id: string | number, msg: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editar.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FornecedorController::editar
* @see app/Http/Controllers/FornecedorController.php:67
* @route '/app/fornecedor/editar/{id}/{msg?}'
*/
const editarForm = (args: { id: string | number, msg?: string | number } | [id: string | number, msg: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editar.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::editar
* @see app/Http/Controllers/FornecedorController.php:67
* @route '/app/fornecedor/editar/{id}/{msg?}'
*/
editarForm.get = (args: { id: string | number, msg?: string | number } | [id: string | number, msg: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editar.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::editar
* @see app/Http/Controllers/FornecedorController.php:67
* @route '/app/fornecedor/editar/{id}/{msg?}'
*/
editarForm.head = (args: { id: string | number, msg?: string | number } | [id: string | number, msg: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editar.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editar.form = editarForm

/**
* @see \App\Http\Controllers\FornecedorController::excluir
* @see app/Http/Controllers/FornecedorController.php:72
* @route '/app/fornecedor/excluir/{id}'
*/
export const excluir = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excluir.url(args, options),
    method: 'get',
})

excluir.definition = {
    methods: ["get","head"],
    url: '/app/fornecedor/excluir/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FornecedorController::excluir
* @see app/Http/Controllers/FornecedorController.php:72
* @route '/app/fornecedor/excluir/{id}'
*/
excluir.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return excluir.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::excluir
* @see app/Http/Controllers/FornecedorController.php:72
* @route '/app/fornecedor/excluir/{id}'
*/
excluir.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: excluir.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::excluir
* @see app/Http/Controllers/FornecedorController.php:72
* @route '/app/fornecedor/excluir/{id}'
*/
excluir.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: excluir.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FornecedorController::excluir
* @see app/Http/Controllers/FornecedorController.php:72
* @route '/app/fornecedor/excluir/{id}'
*/
const excluirForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excluir.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::excluir
* @see app/Http/Controllers/FornecedorController.php:72
* @route '/app/fornecedor/excluir/{id}'
*/
excluirForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excluir.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::excluir
* @see app/Http/Controllers/FornecedorController.php:72
* @route '/app/fornecedor/excluir/{id}'
*/
excluirForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: excluir.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

excluir.form = excluirForm

const fornecedor = {
    listar: Object.assign(listar, listar),
    adicionar: Object.assign(adicionar, adicionar),
    editar: Object.assign(editar, editar),
    excluir: Object.assign(excluir, excluir),
}

export default fornecedor