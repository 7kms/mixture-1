import * as types from './actionTypes';
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
export function showPreviousEntrance(status){
  status = status ? true : false;
  return {
    type: types.PERVIOUS_ENTRANCE_BUTTON,
    status
  }
}
