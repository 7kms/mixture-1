import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
 import actionCreates from '../Actions';
 import { connect } from 'react-redux';
import Utils from '../Utils';
const styles = StyleSheet.create({
    content:{
        flex:1,
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Utils.selectedColor
    }
});
class BillList extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        let { dispatch } = this.props;
        dispatch(actionCreates.getBillList());
    }
    render (){
        return (
            <View style={styles.content}>
                <Text>
                    bill list
                </Text>
                {
                    this.props.billList ? (<Text>{this.props.billList.name}</Text>): null
                }
            </View>
        );
    }
}
export default connect(state=>{
    let { billList } = state;
    return {
        billList
    }
})(BillList);