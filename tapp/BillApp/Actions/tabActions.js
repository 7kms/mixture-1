import * as types from './actionTypes';
export function chanTab(tab){
    return {
        type: types.CHANGE_TAB,
        tab
    }
}