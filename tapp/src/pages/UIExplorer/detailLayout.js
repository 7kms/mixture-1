import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import CustomComponent from '../../Components/public';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../../utils/base'
const styles = StyleSheet.create({
    icon:{
        marginLeft:10,
    }
});
const sectionStyles = StyleSheet.create({
    title:{
        backgroundColor:'#fafafa',
        textAlign:'center',
        paddingVertical:10,
        color:'#777',
        shadowColor:'#000',
        shadowOffset:{width:2,height:2},
        shadowRadius:5,
        shadowOpacity:.3
    },
    exampleContent:{
        paddingHorizontal:10,
        paddingVertical:10,
    },
    sectionWrap:{
        margin:10,
        //overflow:'hidden',
        backgroundColor:'#fff',
        borderWidth:Util.pixel,
        borderRadius:5,
        borderColor:'#ccc',
        shadowColor:'#000',
        shadowOffset:{width:1,height:1},
        shadowRadius:5,
        shadowOpacity:.3
    },
    desc:{
        marginTop:2,
        padding:5,
        color:'#abcdef',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
 });
class LayoutHeader extends Component{
     static propTypes = {
         title: React.PropTypes.string,
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
class DeatilLayout extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <LayoutHeader {...this.props}/>
                <ScrollView style={{flex:1}}>
                    {this.props.children}
                </ScrollView>
            </View>
        );
    }
}
class DetailSection extends Component{
    render(){
        return (
            <View 
             style={sectionStyles.sectionWrap}>
            <Text style={sectionStyles.title}> {this.props.title}</Text>
            {this.props.description ? <Text style={sectionStyles.desc}>{this.props.description}</Text> : null}
            <View style={sectionStyles.exampleContent}>
                {this.props.render()}
            </View>
        </View>
        )
         
    }
}
export {DeatilLayout,DetailSection}