import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import actionCreaters from '../Actions';
import Utils from '../Utils';
const styles = StyleSheet.create({

});
class MainPage extends Component{
    render(){
        return (
            <View style={{flex:1,backgroundColor:Utils.themeColor,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',fontSize:30,fontWeight:'bold'}}>
                this is main page
                </Text>
            </View>
        );
    }
}
export default connect((state)=>{
    const {currentTab} = state;
    return{
        currentTab
    }
})(MainPage);