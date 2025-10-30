import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PrincipalController::principal
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
export const principal = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: principal.url(options),
    method: 'get',
})

principal.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrincipalController::principal
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
principal.url = (options?: RouteQueryOptions) => {
    return principal.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrincipalController::principal
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
principal.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: principal.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrincipalController::principal
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
principal.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: principal.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PrincipalController::principal
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
const principalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: principal.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrincipalController::principal
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
principalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: principal.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrincipalController::principal
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
principalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: principal.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

principal.form = principalForm

const PrincipalController = { principal }

export default PrincipalController