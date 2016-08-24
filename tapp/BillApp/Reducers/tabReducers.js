import * as types from '../Actions/actionTypes';
let initicalTab = {
    title:'账单',
    selectedTab:'bill-list'
};
export function changeTab(state=initicalTab,action){
    switch(action.type){
        case types.CHANGE_TAB:
            return {...state,...action.tab}
        default:
            return state;
    }
}