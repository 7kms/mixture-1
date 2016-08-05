import * as types from './actionTypes';
export function tabChange(tab){
  return {
    type: types.TAB_CHANGE,
    tab
  }
}
export function previousTitleChange(titleArray){
  let tempArr = Object.assign([],titleArray.reverse()); 
  // let len = titleArray.length;
  //
  // let index = Math.floor(Math.random()*len);
  // newTitleArr = titleArray.
  return {
    type: types.PREVIOUS_TITLE_CHANGE,
    titleArray:tempArr
  }
}
