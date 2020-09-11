import { ACTIONS } from './actionCreator'

export const INIT_STATE = {
    products: [
        // {
        //     id: ,
        //     title: ,
        //     price: ,
        //     image: ,
        //     detail: ,
        // }
    ],
    loading: false,
    carts: [],
    isDrawerOpen: false,
}

export function reducer(state, action) {
    return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload)
}

const ACTION_HANDLERS = {
    [ACTIONS.INIT_DATA_LOADED]: handleInitDataLoaded,
    // [ACTIONS.LOADING_INIT_DATA]
    [ACTIONS.LOADING]: handleLoading,
    [ACTIONS.ADDED_TO_CART]: handleAddedToCart,
    [ACTIONS.TOGGLE_DRAWER]: handleToggleDrawer,
}

export function handleInitDataLoaded(state, payload) {
    const goodFormated = payload.items.map(item => {
        return {
            id: item.sys.id,
            title: item.fields.title,
            price: item.fields.price,
            image: item.fields.image.fields.file.url,
            detail: item.fields.detail,
        }
    });

    return {
        ...state,
        products: goodFormated,
        loading: false,
    }
}

export function handleLoading(state) {
    return {
        ...state,
        loading: true,
    }
}

export function handleAddedToCart(state, productId) {
    const index = state.carts.findIndex(cart => cart.productId === productId);
    const newCarts = [...state.carts];

    if (index === -1) {
        newCarts.push({ productId, count: 1 })
    }
    else {
        const updatedProduct = { productId, count: state.carts[index].count + 1 };
        newCarts.splice(index, 1, updatedProduct);
    }
    console.log(newCarts);

    return {
        ...state,
        carts: newCarts,
    }
}

export function handleToggleDrawer(state) {
    return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
    }
}