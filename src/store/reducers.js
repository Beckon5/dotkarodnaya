import {ACTION_CHANGE_CURRENT_HERO, ACTION_CHANGE_SEARCH_VALUE, ACTION_CHANGE_DATA} from '../store/actionType'


const initialState = {
    currentHero: 'Axe',
    searchValue: '',
    data: {}

}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_CURRENT_HERO:
            return { ...state, currentHero: action.payload };
        case ACTION_CHANGE_SEARCH_VALUE:
            return { ...state, searchValue: action.payload };
        case ACTION_CHANGE_DATA:
            return { ...state, data: action.payload};
        
        
    }

    return state;
}