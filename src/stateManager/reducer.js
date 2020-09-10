import { ACTIONS } from './actionCreator'
import DATA from '../services/products.json'

export const INIT_STATE = {
}

export function reducer(state, action) {
    return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload)
}

const ACTION_HANDLERS = {
}