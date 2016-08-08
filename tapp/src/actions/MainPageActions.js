import * as types from './actionTypes'

 
export function mainPageGetInfo(){
   return (dispatch) => {
        fetch('../resource/mainPageData')
        .then((res=>res.json()))
        .then(dataList=>{
            dispatch({
                type: types.MAIN_PAGE_GET_INFO,
                dataList
            });
        })
    }
}
export function mainPageFilterInfo(filter=''){
    return {
        type:types.MAIN_PAGE_FILTER_INFO,
        filter
    }
}