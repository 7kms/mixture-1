import * as types from './actionTypes'
export function mainPageFilterInfo(filter='',dataObj){
    let keyArray = Object.keys(dataObj);
    let obj = {};
    if(filter){
        filter = filter.toUpperCase();
        keyArray.forEach((key,index)=>{
            obj[key] = dataObj[key].filter(dataObj=>{
                return dataObj.title.toUpperCase().indexOf(filter) > -1;
            });
        });
        dataObj = obj;
    }
    return {
        type:types.MAIN_PAGE_FILTER_INFO,
        dataObj
    }
}