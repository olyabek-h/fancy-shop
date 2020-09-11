import { fakeApi } from '../services/services'

export const ACTIONS = {
    INIT_DATA_LOADED: 'INIT_DATA_LOADED',
    LOADING_INIT_DATA: 'LOADING_INIT_DATA',
    LOADING: 'LOADING',
    ADDED_TO_CART: 'ADDED_TO_CART',
    TOGGLE_DRAWER: 'TOGGLE_DRAWER',
    REMOVED_FROM_CART: 'REMOVED_FROM_CART',
    CART_CLEARED: 'CART_CLEARED',
}

export const initDataLoaded = data => ({ type: ACTIONS.INIT_DATA_LOADED, payload: data })
export const loading = () => ({ type: ACTIONS.LOADING })
export const loadingInitData = () => {
    return dispatch => {
        dispatch(loading());
        fakeApi()
            .then(result => {
                dispatch(initDataLoaded(result));
            })
    }
}
export const addedToCart = (productId, productPrice) => ({ type: ACTIONS.ADDED_TO_CART, payload: { productId, productPrice } })
export const toggleDrawer = () => ({ type: ACTIONS.TOGGLE_DRAWER })
export const removedFromCart = (productId, productCount, productPrice) => ({ type: ACTIONS.REMOVED_FROM_CART, payload: { productId, productCount, productPrice } })
export const cartCleared = () => ({ type: ACTIONS.CART_CLEARED })
