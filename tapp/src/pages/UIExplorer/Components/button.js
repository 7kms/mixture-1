import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
const styles = StyleSheet.create({
  button: {
    borderColor: '#696969',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
  }
});
class ButtonExplorer extends Component{
    static propTypes = {
        onPress: React.PropTypes.func
    };
    render(){
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={this.props.onPress}
                onderlayColor="grey"
            >
                <Text>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}
export { ButtonExplorer as Button}