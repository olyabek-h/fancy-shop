import { fakeApi } from '../services/services'

export const ACTIONS = {
    INIT_DATA_LOADED: 'INIT_DATA_LOADED',
    LOADING_INIT_DATA: 'LOADING_INIT_DATA',
    LOADING: 'LOADING'
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