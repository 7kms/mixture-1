import React , {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import actionCreaters from '../actions';
import { connect } from 'react-redux';
import MainPage from './mainPage';
import Swiper from 'react-native-swiper';
import {CustomButton,Header} from '../Components/public';
import Util from '../utils/base';
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    backgroundColor: '#abcdef'
  },
  slide2: {
    backgroundColor: '#97CAE5'
  },
  slide3: {
    backgroundColor: '#53cac3'
  },
  swiperView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    backgroundColor:'transparent',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  entrance:{
    position:'absolute',
    top:250,
    left:Util.size.width/2 -50,
    width:100,
    paddingVertical:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,199,.3)'
  },
  enterText:{
    fontWeight:'bold',
    fontSize:20,
    color:'green',
    textAlign:'center',
  }
});
const renderPagination = (index, total, context) => {
  return (
    <View style={{position:'absolute',right:10,bottom:10}}>
      <Text style={{fontSize:18,color:'#fff'}}>
        <Text style={{color: '#007aff',fontSize:14,fontWeight:'bold'}}>
          {index + 1}
        </Text>/{total}
      </Text>
    </View>
  )
}
class Previous extends Component{
  constructor(props) {
    super(props)
  }
  static propTypes = {
    previousItems:React.PropTypes.array.isRequired,
    showPreviousEntrance: React.PropTypes.bool,
    navigator: React.PropTypes.object,
    dispatch:React.PropTypes.func.isRequired
  };
  generateHeader(){
    const leftButton = (<CustomButton text='NAVITE' onPress={()=>this._backToNative()}/>);
    const customHeader = (<Header title="REACT" leftButton={leftButton} />);
    return customHeader;
  }
  render() {
    return (
      <Text>sq</Text>
    )
  }
}
export default connect(state=>{
  const {previousItems,previousEntrance} = state;
  return {
    previousItems,
    showPreviousEntrance:previousEntrance
  }
})(Previous);