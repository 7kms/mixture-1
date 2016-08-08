import React,{Component} from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:80,
        height:44
    },
    buttonText:{
        color:'white',
        fontSize:14,
        textAlign:'center'
    },
    iconText:{
        marginLeft:5
    }
});
export class CustomButton extends Component{
    constructor(props){
        super(props);
    }
    static propTypes = {
        onPress: React.PropTypes.func,
        icon: React.PropTypes.element,
        text: React.PropTypes.string
    };
    render(){
        return(
            <TouchableOpacity
                style={styles.button}
                onPress = {()=>{this.props.onPress ? this.props.onPress(): null}}
            >
                {this.props.icon ? this.props.icon : null}
                <Text 
                    numberOfLines={1}
                    style={this.props.icon ? [styles.buttonText,styles.iconText] : styles.buttonText}
                    >
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}