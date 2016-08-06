import React,{Component} from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
const styles = StyleSheet.create({
    button:{
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:'red',
        
    },
    buttonText:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        backgroundColor:'yellow'
    }
});
class CustomButton extends Component{
    static propTypes = {
        onPress: React.PropTypes.func,
        text: React.PropTypes.string.isRequired
    };
    render(){
        return(
            <TouchableOpacity
                style={styles.button}
                onPress = {()=>{this.props.onPress ? this.props.onPress(): null}}
            >
                <Text style={styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}
export default CustomButton;