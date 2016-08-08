import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import CustomComponent from '../../Components/public';
import Icon from 'react-native-vector-icons/Ionicons';
const styles = StyleSheet.create({
    icon:{
        marginLeft:10,
    }
});
 export  class LayoutHeader extends Component{
     static propTypes = {
         title:React.PropTypes.string,
         navigator: React.PropTypes.object,
     };
     _goBack(){
         this.props.navigator.pop();
     }
     _customHeader(){
         let leftIcon = (<Icon name="ios-arrow-back" style={styles.icon} size={20} color="#fff"/>);
         let leftBtn = (<CustomComponent.CustomButton icon={leftIcon} onPress={()=>this._goBack()} text="UIExplorer"/>);
         let Header = (<CustomComponent.Header leftButton={leftBtn} title={this.props.title}/>);
         return Header;
     }
    render(){
        return this._customHeader();
    }
}