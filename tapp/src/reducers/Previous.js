import * as types from '../actions/actionTypes'
const previousInitItems = [
  {title:"ARE",css:'slide1'},
  {title:"YOU",css:'slide2'},
  {title:"READY",css:'slide3'}
];
export function previousItems(state = previousInitItems,action={}){
    switch (action.type){
      case types.PREVIOUS_TITLE_CHANGE:
        return action.titleArray;
      default:
        return state;
    }
}
