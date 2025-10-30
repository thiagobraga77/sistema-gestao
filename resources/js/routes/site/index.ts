import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PrincipalController::index
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PrincipalController::index
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PrincipalController::index
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrincipalController::index
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PrincipalController::index
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrincipalController::index
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PrincipalController::index
* @see app/Http/Controllers/PrincipalController.php:10
* @route '/'
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
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
export const contato = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contato.url(options),
    method: 'post',
})

contato.definition = {
    methods: ["post"],
    url: '/contato',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
contato.url = (options?: RouteQueryOptions) => {
    return contato.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
contato.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: contato.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
const contatoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: contato.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContatoController::contato
* @see app/Http/Controllers/ContatoController.php:41
* @route '/contato'
*/
contatoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: contato.url(options),
    method: 'post',
})

contato.form = contatoForm

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

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login1',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:9
* @route '/login1'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/login1',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LoginController::login
* @see app/Http/Controllers/LoginController.php:22
* @route '/login1'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

const site = {
    index: Object.assign(index, index),
    contato: Object.assign(contato, contato),
    sobrenos: Object.assign(sobrenos, sobrenos),
    login: Object.assign(login, login),
}

export default site