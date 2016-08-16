import React,{Component} from 'react';
import {
    View,
    Text,
   StyleSheet
} from 'react-native';
import Realm from 'realm';


class RealmExplorer extends Component {
 render() {
   let realm = new Realm({
     schema: [{name: 'Dog', properties: {name: 'string'}}]
   });

   realm.write(() => {
     realm.create('Dog', {name: 'Rex'});
     realm.create('Dog', {name: 'redux'});
     realm.create('Dog', {name: 'redux-2'});
   });

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