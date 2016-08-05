import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
class MainPage extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View>
        <Text>dadada</Text>
      </View>
    )
  }
}
export default connect(state=>{
  const {mainInfo} = state;
  return {
    mainInfo
  }
})(MainPage);
