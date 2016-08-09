import * as types from '../actions/actionTypes'

export function MainPageFilterObj(state = {},action={}){
    switch(action.type){
        case types.MAIN_PAGE_FILTER_INFO:
            return action.dataObj;
        default:
            return state;    
    }
}