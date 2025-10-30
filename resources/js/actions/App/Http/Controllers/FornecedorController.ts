import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FornecedorController::index
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/fornecedor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FornecedorController::index
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::index
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::index
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FornecedorController::index
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::index
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::index
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
const listar5bd102e535fe8baed8e5bb741d381c1d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listar5bd102e535fe8baed8e5bb741d381c1d.url(options),
    method: 'post',
})

listar5bd102e535fe8baed8e5bb741d381c1d.definition = {
    methods: ["post"],
    url: '/app/fornecedor/listar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar5bd102e535fe8baed8e5bb741d381c1d.url = (options?: RouteQueryOptions) => {
    return listar5bd102e535fe8baed8e5bb741d381c1d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar5bd102e535fe8baed8e5bb741d381c1d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: listar5bd102e535fe8baed8e5bb741d381c1d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
const listar5bd102e535fe8baed8e5bb741d381c1dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: listar5bd102e535fe8baed8e5bb741d381c1d.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar5bd102e535fe8baed8e5bb741d381c1dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: listar5bd102e535fe8baed8e5bb741d381c1d.url(options),
    method: 'post',
})

listar5bd102e535fe8baed8e5bb741d381c1d.form = listar5bd102e535fe8baed8e5bb741d381c1dForm
/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
const listar5bd102e535fe8baed8e5bb741d381c1d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listar5bd102e535fe8baed8e5bb741d381c1d.url(options),
    method: 'get',
})

listar5bd102e535fe8baed8e5bb741d381c1d.definition = {
    methods: ["get","head"],
    url: '/app/fornecedor/listar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar5bd102e535fe8baed8e5bb741d381c1d.url = (options?: RouteQueryOptions) => {
    return listar5bd102e535fe8baed8e5bb741d381c1d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar5bd102e535fe8baed8e5bb741d381c1d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listar5bd102e535fe8baed8e5bb741d381c1d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar5bd102e535fe8baed8e5bb741d381c1d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: listar5bd102e535fe8baed8e5bb741d381c1d.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
const listar5bd102e535fe8baed8e5bb741d381c1dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listar5bd102e535fe8baed8e5bb741d381c1d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar5bd102e535fe8baed8e5bb741d381c1dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listar5bd102e535fe8baed8e5bb741d381c1d.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::listar
* @see app/Http/Controllers/FornecedorController.php:13
* @route '/app/fornecedor/listar'
*/
listar5bd102e535fe8baed8e5bb741d381c1dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listar5bd102e535fe8baed8e5bb741d381c1d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

listar5bd102e535fe8baed8e5bb741d381c1d.form = listar5bd102e535fe8baed8e5bb741d381c1dForm

export const listar = {
    '/app/fornecedor/listar': listar5bd102e535fe8baed8e5bb741d381c1d,
    '/app/fornecedor/listar': listar5bd102e535fe8baed8e5bb741d381c1d,
}

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
const adicionar8482440af9ceabeb5998cd7adb71e350 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adicionar8482440af9ceabeb5998cd7adb71e350.url(options),
    method: 'get',
})

adicionar8482440af9ceabeb5998cd7adb71e350.definition = {
    methods: ["get","head"],
    url: '/app/fornecedor/adicionar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar8482440af9ceabeb5998cd7adb71e350.url = (options?: RouteQueryOptions) => {
    return adicionar8482440af9ceabeb5998cd7adb71e350.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar8482440af9ceabeb5998cd7adb71e350.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adicionar8482440af9ceabeb5998cd7adb71e350.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar8482440af9ceabeb5998cd7adb71e350.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adicionar8482440af9ceabeb5998cd7adb71e350.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
const adicionar8482440af9ceabeb5998cd7adb71e350Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adicionar8482440af9ceabeb5998cd7adb71e350.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar8482440af9ceabeb5998cd7adb71e350Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adicionar8482440af9ceabeb5998cd7adb71e350.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar8482440af9ceabeb5998cd7adb71e350Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: adicionar8482440af9ceabeb5998cd7adb71e350.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

adicionar8482440af9ceabeb5998cd7adb71e350.form = adicionar8482440af9ceabeb5998cd7adb71e350Form
/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
const adicionar8482440af9ceabeb5998cd7adb71e350 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adicionar8482440af9ceabeb5998cd7adb71e350.url(options),
    method: 'post',
})

adicionar8482440af9ceabeb5998cd7adb71e350.definition = {
    methods: ["post"],
    url: '/app/fornecedor/adicionar',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar8482440af9ceabeb5998cd7adb71e350.url = (options?: RouteQueryOptions) => {
    return adicionar8482440af9ceabeb5998cd7adb71e350.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar8482440af9ceabeb5998cd7adb71e350.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adicionar8482440af9ceabeb5998cd7adb71e350.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
const adicionar8482440af9ceabeb5998cd7adb71e350Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: adicionar8482440af9ceabeb5998cd7adb71e350.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FornecedorController::adicionar
* @see app/Http/Controllers/FornecedorController.php:24
* @route '/app/fornecedor/adicionar'
*/
adicionar8482440af9ceabeb5998cd7adb71e350Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: adicionar8482440af9ceabeb5998cd7adb71e350.url(options),
    method: 'post',
})

adicionar8482440af9ceabeb5998cd7adb71e350.form = adicionar8482440af9ceabeb5998cd7adb71e350Form

export const adicionar = {
    '/app/fornecedor/adicionar': adicionar8482440af9ceabeb5998cd7adb71e350,
    '/app/fornecedor/adicionar': adicionar8482440af9ceabeb5998cd7adb71e350,
}

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

const FornecedorController = { index, listar, adicionar, editar, excluir }

export default FornecedorController