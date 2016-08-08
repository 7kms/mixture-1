import React,{Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {LayoutHeader} from './layout';
 class TextExplorer extends Component{
     static propTypes = {
         title:React.PropTypes.string,
         navigator: React.PropTypes.object
     };
    render(){
        return(
            <View style={{flex:1}}>
                <LayoutHeader {...this.props}/>
                <Text accessible={false}>hello text</Text>
            </View>
        );
    }
}
export {TextExplorer as text};