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
    cart: [],
    totalPrice: 0,
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
    [ACTIONS.REMOVED_FROM_CART]: handleRemovedFromCart,
    [ACTIONS.CART_CLEARED]: handleCartCleared,
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

export function handleAddedToCart(state, { productId, productPrice }) {
    const index = state.cart.findIndex(cart => cart.productId === productId);
    const newCart = [...state.cart];

    if (index === -1) {
        newCart.push({ productId, count: 1 })
    }
    else {
        const updatedProduct = { productId, count: state.cart[index].count + 1 };
        newCart.splice(index, 1, updatedProduct);
    }

    return {
        ...state,
        cart: newCart,
        totalPrice: state.totalPrice + productPrice,
    }
}

export function handleToggleDrawer(state) {
    return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
    }
}

export function handleRemovedFromCart(state, { productId, productCount, productPrice }) {
    const index = state.cart.findIndex(cart => cart.productId === productId);
    const newCart = [...state.cart];

    if (productCount === 1) {
        newCart.splice(index, 1);
    }
    else {
        const updatedProduct = { productId, count: state.cart[index].count - 1 };
        newCart.splice(index, 1, updatedProduct);
    }

    return {
        ...state,
        cart: newCart,
        totalPrice: state.totalPrice - productPrice,
    }
}

export function handleCartCleared(state) {
    return {
        ...state,
        cart: [],
        totalPrice: 0,
    }
}