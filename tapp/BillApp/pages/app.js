import React,{Component} from 'react';
import {
    Navigator
} from 'react-native';
import Launch from './launch';
import Util from '../Utils';
console.log(Launch)
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Navigator
                initialRoute={{
                    title:'launch',
                    Component:Launch
                }}
                configureScene = {(route,routeStack)=>{
                    if(Util.OS === 'android'){
                        return Navigator.SceneConfigs.FloatFromBottom;
                    }else{
                        return Navigator.SceneConfigs.PushFromRight;
                    }
                }}
                renderScene={(route,navigator)=>{
                    let {Component,title} = route;
                    return <Component navigator={navigator} title={title} {...route}/>
                }}
            />
        );
    }
}
export default App;