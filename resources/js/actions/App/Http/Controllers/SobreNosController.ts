import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SobreNosController::sobrenos
* @see app/Http/Controllers/SobreNosController.php:12
* @route '/sobre-nos'
*/
export const sobrenos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sobrenos.url(options),
    method: 'get',
})

sobrenos.definition = {
    methods: ["get","head"],
    url: '/sobre-nos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SobreNosController::sobrenos
* @see app/Http/Controllers/SobreNosController.php:12
* @route '/sobre-nos'
*/
sobrenos.url = (options?: RouteQueryOptions) => {
    return sobrenos.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SobreNosController::sobrenos
* @see app/Http/Controllers/SobreNosController.php:12
* @route '/sobre-nos'
*/
sobrenos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sobrenos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SobreNosController::sobrenos
* @see app/Http/Controllers/SobreNosController.php:12
* @route '/sobre-nos'
*/
sobrenos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sobrenos.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SobreNosController::sobrenos
* @see app/Http/Controllers/SobreNosController.php:12
* @route '/sobre-nos'
*/
const sobrenosForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sobrenos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SobreNosController::sobrenos
* @see app/Http/Controllers/SobreNosController.php:12
* @route '/sobre-nos'
*/
sobrenosForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sobrenos.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SobreNosController::sobrenos
* @see app/Http/Controllers/SobreNosController.php:12
* @route '/sobre-nos'
*/
sobrenosForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sobrenos.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sobrenos.form = sobrenosForm

const SobreNosController = { sobrenos }

export default SobreNosController