import { fakeApi } from '../services/services'

export const ACTIONS = {
    INIT_DATA_LOADED: 'INIT_DATA_LOADED',
}

export const initDataLoaded = data => ({type:ACTIONS.INIT_DATA_LOADED, payload: data})