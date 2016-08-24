import React,{Component} from 'react';
import {
    View,
    Text,
   StyleSheet
} from 'react-native';
import Realm from 'realm';
// class Car {}
// Car.schema = {
//   name:'Car',
//   properties:{
//     make:'string',
//     model:'string',
//     miles:{type:'int',default: 0}
//   }
// };
// class Person{}
// Person.schema = {
//   name:'Person',
//   properties:{
//     name: {type:'string'},
//     cars: {type:'list',objectType:'Car'},
//     picture: {type:'data',optional:true}
//   }
// };
//Get the defaulte realm with support for our objects
// let realm = new Realm({schema:[Car,Person,{name: 'Dog', properties: {name: 'string'}}]});

//create realm objects and write to local storage
// realm.write(()=>{
//   let myCar = realm.create('Car',{
//     make:'Honda',
//     model:'Civic',
//     miles:1000
//   });
//   myCar.miles += 20; // Update a property value
// });
// Query Realm for all cars with a high mileage
// let cars = realm.objects('Car').filtered('miles > 1000');
// console.log(cars.length);
// Add another car
// realm.write(()=>{
//   let anotherCar = realm.create('Car',{
//     make:'tiger',
//     model:'land river',
//     miles: 3000
//   });
// });
// console.log(cars.length);
// cars = realm.objects('Car').filtered('miles > 1000');
// console.log(cars.length);
class RealmExplorer extends Component {
 render() {
  //  let realm2 = new Realm({
  //    schema: []
  //  });

  //  realm2.write(() => {
  //    realm.create('Dog', {name: 'Rex'});
  //    realm.create('Dog', {name: 'redux'});
  //    realm.create('Dog', {name: 'redux-2'});
  //  });

   return (
     <View style={styles.container}>
       <Text style={styles.welcome}>
         Count of Dogs in Realm: {realm.objects('Dog').length}
       </Text>
     </View>
   );
 }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#abcdef'
    },
    welcome:{
        color:'#666',
        fontSize:18
    }
});

export {RealmExplorer as realm}