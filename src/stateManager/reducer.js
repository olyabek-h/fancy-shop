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
}

export function reducer(state, action) {
    return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload)
}

const ACTION_HANDLERS = {
    [ACTIONS.INIT_DATA_LOADED]: handleInitDataLoaded,
    // [ACTIONS.LOADING_INIT_DATA]
    [ACTIONS.LOADING]: handleLoading,
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