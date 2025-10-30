import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TesteController::teste
* @see app/Http/Controllers/TesteController.php:9
* @route '/teste/{p1}/{p2}'
*/
export const teste = (args: { p1: string | number, p2: string | number } | [p1: string | number, p2: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teste.url(args, options),
    method: 'get',
})

teste.definition = {
    methods: ["get","head"],
    url: '/teste/{p1}/{p2}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TesteController::teste
* @see app/Http/Controllers/TesteController.php:9
* @route '/teste/{p1}/{p2}'
*/
teste.url = (args: { p1: string | number, p2: string | number } | [p1: string | number, p2: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            p1: args[0],
            p2: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        p1: args.p1,
        p2: args.p2,
    }

    return teste.definition.url
            .replace('{p1}', parsedArgs.p1.toString())
            .replace('{p2}', parsedArgs.p2.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TesteController::teste
* @see app/Http/Controllers/TesteController.php:9
* @route '/teste/{p1}/{p2}'
*/
teste.get = (args: { p1: string | number, p2: string | number } | [p1: string | number, p2: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teste.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TesteController::teste
* @see app/Http/Controllers/TesteController.php:9
* @route '/teste/{p1}/{p2}'
*/
teste.head = (args: { p1: string | number, p2: string | number } | [p1: string | number, p2: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teste.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TesteController::teste
* @see app/Http/Controllers/TesteController.php:9
* @route '/teste/{p1}/{p2}'
*/
const testeForm = (args: { p1: string | number, p2: string | number } | [p1: string | number, p2: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teste.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TesteController::teste
* @see app/Http/Controllers/TesteController.php:9
* @route '/teste/{p1}/{p2}'
*/
testeForm.get = (args: { p1: string | number, p2: string | number } | [p1: string | number, p2: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teste.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TesteController::teste
* @see app/Http/Controllers/TesteController.php:9
* @route '/teste/{p1}/{p2}'
*/
testeForm.head = (args: { p1: string | number, p2: string | number } | [p1: string | number, p2: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: teste.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

teste.form = testeForm

const TesteController = { teste }

export default TesteController