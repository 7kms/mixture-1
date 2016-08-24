import Realm from 'realm';
class Bill extends Realm.object {}
Bill.schema = {
    name:'Bill',
    properties:{
        category : {type:'string'},
        description: {type:'string'},
        time : {type:'date'},
        money: {type:'double'}
    }
}

class BillList extends Realm.object {}

BillList.schema = {
    name: 'BillList',
    properties: {
        name: 'string',
        items: {type:'list',objectType:'Bill'}
    }
}

export default new Realm({schema:[ Bill, BillList ]});