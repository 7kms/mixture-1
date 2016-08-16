
import React,{Component} from 'react';
import {
    Image,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';


class ScreenshotExample extends React.Component {
  state = {
    uri: undefined,
  };

  render() {
    return (
      <View>
        <Text onPress={this.takeScreenshot} style={style.button}>
          Click to take a screenshot
        </Text>
        <Image style={style.image} source={{uri: this.state.uri}}/>
      </View>
    );
  }

  takeScreenshot = () => {
    UIManager
      .takeSnapshot('window', {format: 'jpeg', quality: 0.8}) // See UIManager.js for options
      .then((uri) => this.setState({uri}))
      .catch((error) => alert(error));
  };
}

var style = StyleSheet.create({
  button: {
    marginBottom: 10,
    fontWeight: '500',
  },
  image: {
    flex: 1,
    height: 300,
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
});

let examples = [
  {
    title: 'Take screenshot',
    render(): ReactElement<any> { return <ScreenshotExample />; }
  },
];

class SnapshotViewIOSExplorer extends Component{
     static propTypes = {
         title:React.PropTypes.string,
         navigator: React.PropTypes.object
     };
    render(){
        return(
            <DeatilLayout {...this.props}>
                {examples.map((obj,index)=>{
                    return (
                        <DetailSection key={index} {...obj}/>                       
                        );
                })}
            </DeatilLayout>
        );
    }
}
export {SnapshotViewIOSExplorer as SnapshotViewIOS};