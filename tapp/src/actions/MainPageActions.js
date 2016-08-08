import * as types from './actionTypes'
export function mainPageFilterInfo(filter='',dataList){
    let filterArr;
    if(filter){
        filter = filter.toUpperCase();
        filterArr = dataList.filter(dataObj=>{
            return dataObj.title.toUpperCase().indexOf(filter) > -1;
        });
    }else{
        filterArr = dataList;
    } 
    return {
        type:types.MAIN_PAGE_FILTER_INFO,
        dataList:filterArr
    }
}