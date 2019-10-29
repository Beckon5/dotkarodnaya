
import actionType from "./actionType";

const initialState = {
    currentHero: 'Axe',
    searchValue: '',
    data: {}

}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ACTION_CHANGE_CURRENT_HERO:
            return { ...state, currentHero: action.payload };
        case actionType.ACTION_CHANGE_SEARCH_VALUE:
            return { ...state, searchValue: action.payload };
        case actionType.ACTION_CHANGE_DATA:
            return { ...state, data: action.payload};
        default: return state;
        
    }

    
}