import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:12
* @route '/contato'
*/
export const contato = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contato.url(options),
    method: 'get',
})

contato.definition = {
    methods: ["get","head"],
    url: '/contato',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:12
* @route '/contato'
*/
contato.url = (options?: RouteQueryOptions) => {
    return contato.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:12
* @route '/contato'
*/
contato.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contato.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:12
* @route '/contato'
*/
contato.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contato.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:12
* @route '/contato'
*/
const contatoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contato.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:12
* @route '/contato'
*/
contatoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contato.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:12
* @route '/contato'
*/
contatoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contato.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

contato.form = contatoForm

/**
* @see \App\Http\Controllers\ContatoController::salvar
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
export const salvar = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(options),
    method: 'post',
})

salvar.definition = {
    methods: ["post"],
    url: '/contato',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContatoController::salvar
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
salvar.url = (options?: RouteQueryOptions) => {
    return salvar.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContatoController::salvar
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
salvar.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: salvar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContatoController::salvar
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
const salvarForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: salvar.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContatoController::salvar
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
salvarForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: salvar.url(options),
    method: 'post',
})

salvar.form = salvarForm

const ContatoController = { contato, salvar }

export default ContatoController