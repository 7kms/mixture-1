import React,{Component} from 'react';
import {
    Navigator,
    Text
} from 'react-native';
import Launch from './Launch';
import Util from '../Utils';
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            //创建应用的根导航(路由)
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