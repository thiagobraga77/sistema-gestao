import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import fornecedorAb710c from './fornecedor'
/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:9
* @route '/app/home'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/app/home',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:9
* @route '/app/home'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:9
* @route '/app/home'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:9
* @route '/app/home'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:9
* @route '/app/home'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:9
* @route '/app/home'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:9
* @route '/app/home'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \App\Http\Controllers\LoginController::sair
* @see app/Http/Controllers/LoginController.php:66
* @route '/app/sair'
*/
export const sair = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sair.url(options),
    method: 'get',
})

sair.definition = {
    methods: ["get","head"],
    url: '/app/sair',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::sair
* @see app/Http/Controllers/LoginController.php:66
* @route '/app/sair'
*/
sair.url = (options?: RouteQueryOptions) => {
    return sair.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::sair
* @see app/Http/Controllers/LoginController.php:66
* @route '/app/sair'
*/
sair.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sair.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LoginController::sair
* @see app/Http/Controllers/LoginController.php:66
* @route '/app/sair'
*/
sair.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sair.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LoginController::sair
* @see app/Http/Controllers/LoginController.php:66
* @route '/app/sair'
*/
const sairForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sair.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LoginController::sair
* @see app/Http/Controllers/LoginController.php:66
* @route '/app/sair'
*/
sairForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sair.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LoginController::sair
* @see app/Http/Controllers/LoginController.php:66
* @route '/app/sair'
*/
sairForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sair.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sair.form = sairForm

/**
* @see \App\Http\Controllers\ClienteController::cliente
* @see app/Http/Controllers/ClienteController.php:9
* @route '/app/cliente'
*/
export const cliente = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cliente.url(options),
    method: 'get',
})

cliente.definition = {
    methods: ["get","head"],
    url: '/app/cliente',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ClienteController::cliente
* @see app/Http/Controllers/ClienteController.php:9
* @route '/app/cliente'
*/
cliente.url = (options?: RouteQueryOptions) => {
    return cliente.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ClienteController::cliente
* @see app/Http/Controllers/ClienteController.php:9
* @route '/app/cliente'
*/
cliente.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cliente.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClienteController::cliente
* @see app/Http/Controllers/ClienteController.php:9
* @route '/app/cliente'
*/
cliente.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cliente.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ClienteController::cliente
* @see app/Http/Controllers/ClienteController.php:9
* @route '/app/cliente'
*/
const clienteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cliente.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClienteController::cliente
* @see app/Http/Controllers/ClienteController.php:9
* @route '/app/cliente'
*/
clienteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cliente.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ClienteController::cliente
* @see app/Http/Controllers/ClienteController.php:9
* @route '/app/cliente'
*/
clienteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cliente.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cliente.form = clienteForm

/**
* @see \App\Http\Controllers\FornecedorController::fornecedor
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
export const fornecedor = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fornecedor.url(options),
    method: 'get',
})

fornecedor.definition = {
    methods: ["get","head"],
    url: '/app/fornecedor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FornecedorController::fornecedor
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
fornecedor.url = (options?: RouteQueryOptions) => {
    return fornecedor.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FornecedorController::fornecedor
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
fornecedor.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fornecedor.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::fornecedor
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
fornecedor.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fornecedor.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FornecedorController::fornecedor
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
const fornecedorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fornecedor.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::fornecedor
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
fornecedorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fornecedor.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FornecedorController::fornecedor
* @see app/Http/Controllers/FornecedorController.php:10
* @route '/app/fornecedor'
*/
fornecedorForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fornecedor.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fornecedor.form = fornecedorForm

const app = {
    home: Object.assign(home, home),
    sair: Object.assign(sair, sair),
    cliente: Object.assign(cliente, cliente),
    fornecedor: Object.assign(fornecedor, fornecedorAb710c),
}

export default app