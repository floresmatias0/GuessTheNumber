import { SELECT_CATEGORY } from "../types";

export const selectCategoryAction = (id) => {
    return async (dispatch, getState) => {
        let idxCategory = getState().categories.categories.findIndex(category => category.id === id);
        if(idxCategory === -1) return "not match";
        await dispatch(selectedCategory(getState().categories.categories[idxCategory]));
    }
}

export const selectedCategory = (payload) => ({
    type: SELECT_CATEGORY,
    payload
})