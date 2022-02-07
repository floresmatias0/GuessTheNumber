import {
    SELECT_BREAD,
    FILTERED_BREAD
} from '../types';

export const selectedBreadAction = (id) => {
    return async (dispatch, getState) => {
        let selected = getState().breads.breads.find(bread => bread.id === id);
        await dispatch(selectedBread(selected))
    }
}

export const filteredBreadAction = (id) => {
    return async (dispatch, getState) => {
        let filtered = getState().breads.breads.filter(bread => bread.category === id);
        await dispatch(filteredBread(filtered))
    }
}

export const selectedBread = (payload) => ({
    type: SELECT_BREAD,
    payload
})

export const filteredBread = (payload) => ({
    type: FILTERED_BREAD,
    payload
})