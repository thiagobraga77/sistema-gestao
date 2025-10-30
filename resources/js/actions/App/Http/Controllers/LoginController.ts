import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LoginController::index
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/login1',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::index
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::index
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LoginController::index
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LoginController::index
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LoginController::index
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LoginController::index
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
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
* @see \App\Http\Controllers\LoginController::autenticar
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
export const autenticar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: autenticar.url(options),
    method: 'post',
})

autenticar.definition = {
    methods: ["post"],
    url: '/login1',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LoginController::autenticar
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
autenticar.url = (options?: RouteQueryOptions) => {
    return autenticar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::autenticar
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
autenticar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: autenticar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LoginController::autenticar
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
const autenticarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: autenticar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LoginController::autenticar
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
autenticarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: autenticar.url(options),
    method: 'post',
})

autenticar.form = autenticarForm

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

const LoginController = { index, autenticar, sair }

export default LoginController