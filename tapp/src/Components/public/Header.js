import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Util from '../../utils/base'
const styles = StyleSheet.create({
    navigatorHeader:{
        height:64,
        backgroundColor:Util.backgroundColor
    },
    title:{
        fontSize:16,
        color:'white'
    }
});
export class Header extends Component{
    static propTypes = {
        title:React.PropTypes.string.isRequired,
        leftButton:React.PropTypes.object,
        rightButton:React.PropTypes.object
    };
    render (){
        const {leftButton,rightButton,title} = this.props;
        return (
            <View style={styles.navigatorHeader}>
                {leftButton ? leftButton : null}
                <Text style={styles.title}>title</Text>
                {rightButton ? rightButton : null}
            </View>
        );   
    }
}