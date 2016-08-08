import * as types from '../actions/actionTypes'
export function MainPageListInfo(state=[],action={}){
    switch(action.type){
        case types.MAIN_PAGE_GET_INFO:
            return action.dataList;
        default:
            return state;    
    }
}