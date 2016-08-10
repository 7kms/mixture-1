import React,{Component} from 'react';
import {
  StyleSheet,
  Image,
  LayoutAnimation,
  Text,
  View
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';
import {Button} from './button';
type Layout = {
    x: number,
    y: number,
    width: number,
    height: number 
}
var styles = StyleSheet.create({
  view: {
    padding: 12,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'transparent',
  },
  text: {
    alignSelf: 'flex-start',
    borderColor: 'rgba(0, 0, 255, 0.2)',
    borderWidth: 0.5,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor:'#53cac2'
  },
  pressText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
});

class LayoutEventExample extends React.Component {
  state: State = {
    viewStyle: {
      margin: 20,
    },
  };
  componentDidMount(){
      console.log(LayoutAnimation.Presets);
  }
  animateViewLayout = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.Presets.spring,
      () => {
        console.log('layout animation done.');
        this.addWrapText();
      }
    );
    this.setState({
      viewStyle: {
        margin: this.state.viewStyle.margin > 20 ? 20 : 60,
      }
    });
  };

  addWrapText = () => {
    this.setState(
      {extraText: '  And a bunch more text to wrap around a few lines.'},
      this.changeContainer
    );
  };

  changeContainer = () => {
    this.setState({containerStyle: {width: 280}});
  };

  onViewLayout = (e: LayoutEvent) => {
    console.log('received view layout event\n', e.nativeEvent);
    this.setState({viewLayout: e.nativeEvent.layout});
  };

  onTextLayout = (e: LayoutEvent) => {
    console.log('received text layout event\n', e.nativeEvent);
    this.setState({textLayout: e.nativeEvent.layout});
  };

  onImageLayout = (e: LayoutEvent) => {
    console.log('received image layout event\n', e.nativeEvent);
    this.setState({imageLayout: e.nativeEvent.layout});
  };

  render() {
    var viewStyle = [styles.view, this.state.viewStyle];
    var textLayout = this.state.textLayout || {width: '?', height: '?'};
    var imageLayout = this.state.imageLayout || {x: '?', y: '?'};
    return (
      <View style={this.state.containerStyle}>
        <Text>
          layout events are called on mount and whenever layout is recalculated. Note that the layout event will typically be received <Text style={styles.italicText}>before</Text> the layout has updated on screen, especially when using layout animations.{'  '}
          <Text style={styles.pressText} onPress={this.animateViewLayout}>
            Press here to change layout.
          </Text>
        </Text>
        <View ref="view" onLayout={this.onViewLayout} style={viewStyle}>
          <Image
            ref="img"
            onLayout={this.onImageLayout}
            style={styles.image}
            source={{uri: 'http://facebook.github.io/react-native/img/header_logo.png'}}
          />
          <Text>
            ViewLayout: {JSON.stringify(this.state.viewLayout, null, '  ') + '\n\n'}
          </Text>
          <Text ref="txt" onLayout={this.onTextLayout} style={styles.text}>
            A simple piece of text.{this.state.extraText}
          </Text>
          <Text>
            {'\n'}
            Text w/h: {textLayout.width}/{textLayout.height + '\n'}
            Image x/y: {imageLayout.x}/{imageLayout.y}
          </Text>
        </View>
      </View>
    );
  }
}

class LayoutEventTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageStyle:{
                width:50,
                height:50
            }
        }
    }
    changeLayoutWithAnimate(imageStyle){    
        LayoutAnimation.configureNext(
            LayoutAnimation.Presets.spring,
            () => {
                console.log('layout animation done.');
            }
        );
        this.setState({
            imageStyle:{
                width:imageStyle.width * 1.5,
                height:imageStyle.height * 1.5
            }
        });
    }
    imgOnlayout = (e)=>{
        console.log("image did layout " , e.nativeEvent);
        this.setState({imageLayout: e.nativeEvent.layout},()=>console.log("hehe"));
    }
    render(){
        let imageStyle = this.state.imageStyle;
        var imageLayout = this.state.imageLayout || {x: '?', y: '?'};
        return (
            <View>
               <Button onPress={()=>this.changeLayoutWithAnimate(imageStyle)}>
                    <Text>press to change image layout</Text>
               </Button>
                <Image 
                 onLayout={this.imgOnlayout}
                 style={[imageStyle,{backgroundColor:'#53cac3',alignSelf:'center'}]}
                 source={{uri:'http://facebook.github.io/react-native/img/header_logo.png'}}
                 />   
                 <Text>
                    ViewLayout: {JSON.stringify(imageLayout, null, '  ') + '\n\n'}
                 </Text>
                 <Text>
                    {'\n'}
                    Image x/y: {imageLayout.x}/{imageLayout.y}
                </Text>
            </View>
        );
    }
}
var examples = [
 {
    title: 'LayoutEventExample',
    render: function(): ReactElement<any> {
        return <LayoutEventExample />;
    }
 },
 {
    title: 'LayoutEventExample',
    render: function(): ReactElement<any> {
        return <LayoutEventTest />;
    }
 }
];
class LayoutEventExplorer extends Component{
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
export {LayoutEventExplorer as layoutEvent};