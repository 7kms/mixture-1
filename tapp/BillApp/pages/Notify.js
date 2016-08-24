import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Utils from '../Utils'
const styles = StyleSheet.create({
    content:{
        flex:1,
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Utils.selectedColor
    }
});
class NotifyView extends Component{
    render (){
        return (
            <View style={styles.content}>
                <Text>
                    bill list
                </Text>
            </View>
        );
    }
}
export default connect(state=>{

})(NotifyView);