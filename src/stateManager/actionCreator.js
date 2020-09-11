import { fakeApi } from '../services/services'

export const ACTIONS = {
    INIT_DATA_LOADED: 'INIT_DATA_LOADED',
    LOADING_INIT_DATA: 'LOADING_INIT_DATA',
    LOADING: 'LOADING',
    ADDED_TO_CART: 'ADDED_TO_CART',
    TOGGLE_DRAWER: 'TOGGLE_DRAWER',
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
export const addedToCart = productId => ({ type: ACTIONS.ADDED_TO_CART, payload: productId })
export const toggleDrawer = () => ({ type: ACTIONS.TOGGLE_DRAWER })