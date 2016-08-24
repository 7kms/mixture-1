'use strict';
import React,{Component} from 'react';
import {Navigator,StatusBar,StyleSheet,Text} from 'react-native';
import Util from '../utils/base';
import Previous from './previous';
class App extends Component{
  componentWillMount(){
    StatusBar.setBarStyle('light-content',true);
    StatusBar.setNetworkActivityIndicatorVisible(true);
    this.timer = setTimeout(()=>StatusBar.setNetworkActivityIndicatorVisible(false),3000);
  }
  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }
  render(){
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          component: Previous,
          title:'REACT'
        }}
        configureScene={(route,routeStack)=> {
          //console.log("routStack",routeStack);
          if(Util.OS === 'android'){
            return Navigator.SceneConfigs.FloatFromBottom;
          }else{
            return Navigator.SceneConfigs.PushFromRight;
          }
        }}
        onStartShouldSetResponder={()=>{
          return false;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component navigator={navigator} title={route.title} {...route}/>
        }}
        />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
export default App;
