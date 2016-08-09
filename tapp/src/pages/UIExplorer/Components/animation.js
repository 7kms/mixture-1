import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Animate,
    ScrollView
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';

let examples = [
  {
    title: 'Aimate-basic',
    render: function() {
      return (
        <View style={{backgroundColor: '#527FE4', padding: 5}}>
          <Text style={{fontSize: 11}}>
            aimate
          </Text>
        </View>
      );
    },
  }
];
class AnimateExplorer extends Component{
     static propTypes = {
         title:React.PropTypes.string,
         navigator: React.PropTypes.object
     };
    render(){
        return(
            <DeatilLayout {...this.props}>
                {examples.map((obj,index)=>{
                    return (
                        <DetailSection unique={index} {...obj}/>    
                        );
                })}
            </DeatilLayout>
        );
    }
}
export { AnimateExplorer as animate }
