import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProdutoController::index
* @see app/Http/Controllers/ProdutoController.php:14
* @route '/app/produto'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/produto',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProdutoController::index
* @see app/Http/Controllers/ProdutoController.php:14
* @route '/app/produto'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::index
* @see app/Http/Controllers/ProdutoController.php:14
* @route '/app/produto'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::index
* @see app/Http/Controllers/ProdutoController.php:14
* @route '/app/produto'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProdutoController::index
* @see app/Http/Controllers/ProdutoController.php:14
* @route '/app/produto'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::index
* @see app/Http/Controllers/ProdutoController.php:14
* @route '/app/produto'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::index
* @see app/Http/Controllers/ProdutoController.php:14
* @route '/app/produto'
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
* @see \App\Http\Controllers\ProdutoController::create
* @see app/Http/Controllers/ProdutoController.php:25
* @route '/app/produto/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/app/produto/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProdutoController::create
* @see app/Http/Controllers/ProdutoController.php:25
* @route '/app/produto/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::create
* @see app/Http/Controllers/ProdutoController.php:25
* @route '/app/produto/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::create
* @see app/Http/Controllers/ProdutoController.php:25
* @route '/app/produto/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProdutoController::create
* @see app/Http/Controllers/ProdutoController.php:25
* @route '/app/produto/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::create
* @see app/Http/Controllers/ProdutoController.php:25
* @route '/app/produto/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::create
* @see app/Http/Controllers/ProdutoController.php:25
* @route '/app/produto/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\ProdutoController::store
* @see app/Http/Controllers/ProdutoController.php:35
* @route '/app/produto'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/app/produto',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProdutoController::store
* @see app/Http/Controllers/ProdutoController.php:35
* @route '/app/produto'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::store
* @see app/Http/Controllers/ProdutoController.php:35
* @route '/app/produto'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProdutoController::store
* @see app/Http/Controllers/ProdutoController.php:35
* @route '/app/produto'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProdutoController::store
* @see app/Http/Controllers/ProdutoController.php:35
* @route '/app/produto'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ProdutoController::show
* @see app/Http/Controllers/ProdutoController.php:71
* @route '/app/produto/{produto}'
*/
export const show = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/app/produto/{produto}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProdutoController::show
* @see app/Http/Controllers/ProdutoController.php:71
* @route '/app/produto/{produto}'
*/
show.url = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { produto: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { produto: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            produto: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        produto: typeof args.produto === 'object'
        ? args.produto.id
        : args.produto,
    }

    return show.definition.url
            .replace('{produto}', parsedArgs.produto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::show
* @see app/Http/Controllers/ProdutoController.php:71
* @route '/app/produto/{produto}'
*/
show.get = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::show
* @see app/Http/Controllers/ProdutoController.php:71
* @route '/app/produto/{produto}'
*/
show.head = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProdutoController::show
* @see app/Http/Controllers/ProdutoController.php:71
* @route '/app/produto/{produto}'
*/
const showForm = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::show
* @see app/Http/Controllers/ProdutoController.php:71
* @route '/app/produto/{produto}'
*/
showForm.get = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::show
* @see app/Http/Controllers/ProdutoController.php:71
* @route '/app/produto/{produto}'
*/
showForm.head = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\ProdutoController::edit
* @see app/Http/Controllers/ProdutoController.php:81
* @route '/app/produto/{produto}/edit'
*/
export const edit = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/app/produto/{produto}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProdutoController::edit
* @see app/Http/Controllers/ProdutoController.php:81
* @route '/app/produto/{produto}/edit'
*/
edit.url = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { produto: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { produto: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            produto: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        produto: typeof args.produto === 'object'
        ? args.produto.id
        : args.produto,
    }

    return edit.definition.url
            .replace('{produto}', parsedArgs.produto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::edit
* @see app/Http/Controllers/ProdutoController.php:81
* @route '/app/produto/{produto}/edit'
*/
edit.get = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::edit
* @see app/Http/Controllers/ProdutoController.php:81
* @route '/app/produto/{produto}/edit'
*/
edit.head = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProdutoController::edit
* @see app/Http/Controllers/ProdutoController.php:81
* @route '/app/produto/{produto}/edit'
*/
const editForm = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::edit
* @see app/Http/Controllers/ProdutoController.php:81
* @route '/app/produto/{produto}/edit'
*/
editForm.get = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProdutoController::edit
* @see app/Http/Controllers/ProdutoController.php:81
* @route '/app/produto/{produto}/edit'
*/
editForm.head = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\ProdutoController::update
* @see app/Http/Controllers/ProdutoController.php:91
* @route '/app/produto/{produto}'
*/
export const update = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/app/produto/{produto}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ProdutoController::update
* @see app/Http/Controllers/ProdutoController.php:91
* @route '/app/produto/{produto}'
*/
update.url = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { produto: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { produto: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            produto: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        produto: typeof args.produto === 'object'
        ? args.produto.id
        : args.produto,
    }

    return update.definition.url
            .replace('{produto}', parsedArgs.produto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::update
* @see app/Http/Controllers/ProdutoController.php:91
* @route '/app/produto/{produto}'
*/
update.put = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ProdutoController::update
* @see app/Http/Controllers/ProdutoController.php:91
* @route '/app/produto/{produto}'
*/
update.patch = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ProdutoController::update
* @see app/Http/Controllers/ProdutoController.php:91
* @route '/app/produto/{produto}'
*/
const updateForm = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProdutoController::update
* @see app/Http/Controllers/ProdutoController.php:91
* @route '/app/produto/{produto}'
*/
updateForm.put = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProdutoController::update
* @see app/Http/Controllers/ProdutoController.php:91
* @route '/app/produto/{produto}'
*/
updateForm.patch = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\ProdutoController::destroy
* @see app/Http/Controllers/ProdutoController.php:99
* @route '/app/produto/{produto}'
*/
export const destroy = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/app/produto/{produto}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProdutoController::destroy
* @see app/Http/Controllers/ProdutoController.php:99
* @route '/app/produto/{produto}'
*/
destroy.url = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { produto: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { produto: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            produto: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        produto: typeof args.produto === 'object'
        ? args.produto.id
        : args.produto,
    }

    return destroy.definition.url
            .replace('{produto}', parsedArgs.produto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::destroy
* @see app/Http/Controllers/ProdutoController.php:99
* @route '/app/produto/{produto}'
*/
destroy.delete = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ProdutoController::destroy
* @see app/Http/Controllers/ProdutoController.php:99
* @route '/app/produto/{produto}'
*/
const destroyForm = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProdutoController::destroy
* @see app/Http/Controllers/ProdutoController.php:99
* @route '/app/produto/{produto}'
*/
destroyForm.delete = (args: { produto: number | { id: number } } | [produto: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ProdutoController = { index, create, store, show, edit, update, destroy }

export default ProdutoController