import * as types from '../actions/actionTypes'

export function MainPageFilterInfo(state = [],action={}){
    switch(action.type){
        case types.MAIN_PAGE_FILTER_INFO:
            return action.dataList;
        default:
            return state;    
    }
}