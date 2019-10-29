import {ACTION_CHANGE_CURRENT_HERO, ACTION_CHANGE_SEARCH_VALUE, ACTION_CHANGE_DATA} from '../index'

export const changeCurrentHero = (newCurrentHero) => {

    return {
        type: ACTION_CHANGE_CURRENT_HERO,
        payload: newCurrentHero
    }
}
export const changeSearchValue = (newSearchValue) => {
    
    return {
        type: ACTION_CHANGE_SEARCH_VALUE,
        payload: newSearchValue
    }
}

export const changeData = (newData) => {
    return {
        type: ACTION_CHANGE_DATA,
        payload: newData
    }
}