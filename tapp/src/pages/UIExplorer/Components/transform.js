import React,{Component} from 'react';
import {
    Animated,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {LayoutHeader} from '../layout';
import Util from '../../../utils/base'
var styles = StyleSheet.create({
  container: {
    height: 500,
    borderWidth:Util.pixel
  },
  box1: {
    left: 0,
    backgroundColor: 'green',
    height: 50,
    position: 'absolute',
    top: 0,
    transform: [
      {translateX: 100},
      {translateY: 50},
      {rotate: '30deg'},
      {scaleX: 2},
      {scaleY: 2},
    ],
    width: 50,
  },
  box2: {
    left: 0,
    backgroundColor: 'purple',
    height: 50,
    position: 'absolute',
    top: 0,
    transform: [
      {scaleX: 2},
      {scaleY: 2},
      {translateX: 100},
      {translateY: 50},
      {rotate: '30deg'},
      
    ],
    width: 50,
  },
  box3step1: {
    left: 0,
    backgroundColor: 'lightpink',
    height: 50,
    position: 'absolute',
    top: 0,
    transform: [
      {rotate: '30deg'},
    ],
    width: 50,
  },
  box3step2: {
    left: 0,
    backgroundColor: 'hotpink',
    height: 50,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    transform: [
      {rotate: '30deg'},
      {scaleX: 2},
      {scaleY: 2},
    ],
    width: 50,
  },
  box3step3: {
    left: 0,
    backgroundColor: 'deeppink',
    height: 50,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    transform: [
      {rotate: '30deg'},
      {scaleX: 2},
      {scaleY: 2},
      {translateX: 100},
      {translateY: 50},
    ],
    width: 50,
  },
  box4: {
    left: 0,
    backgroundColor: 'darkorange',
    height: 50,
    position: 'absolute',
    top: 0,
    transform: [
      {translate: [200, 350]},
      {scale: 2.5},
      {rotate: '-0.2rad'},
    ],
    width: 100,
  },
  box5: {
    backgroundColor: 'maroon',
    height: 50,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 50,
  },
  box5Transform: {
    transform: [
      {translate: [-50, 35]},
      {rotate: '50deg'},
      {scale: 2},
    ],
  },
  flipCardContainer: {
    marginVertical: 40,
    flex: 1,
    alignSelf: 'center',
    borderWidth:Util.pixel
  },
  flipCard: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    backfaceVisibility: 'hidden',
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
});
class Flip extends Component {
  state = {
    theta: new Animated.Value(45),
  };
  componentDidMount() {
    this._animate();
  }
  _animate = () => {
    this.state.theta.setValue(0);
    Animated.timing(this.state.theta, {
      toValue: 360,
      duration: 5000,
    }).start(this._animate);
  };
  render() {
    return (
      <View style={styles.flipCardContainer}>
        <Animated.View style={[
          styles.flipCard,
          {transform: [
            {perspective: 850},
            {rotateX: this.state.theta.interpolate({
              inputRange: [0, 180],
              outputRange: ['0deg', '180deg']
            })},
          ]}]}>
          <Text style={styles.flipText}>
            This text is flipping great.
          </Text>
        </Animated.View>
        <Animated.View style={[styles.flipCard, {
          position: 'absolute',
          top: 0,
          backgroundColor: 'red',
          transform: [
            {perspective: 850},
            {rotateX: this.state.theta.interpolate({
              inputRange: [0, 180],
              outputRange: ['180deg', '360deg']
            })},
          ]}]}>
          <Text style={styles.flipText}>
            On the flip side...
          </Text>
        </Animated.View>
      </View>
    );
  }
}
const layoutStyle = StyleSheet.create({
    title:{
        backgroundColor:'#abcdef',
        textAlign:'center',
        paddingVertical:10,
        color:'#777'
    },
    exampleContent:{
        paddingHorizontal:10,
        paddingVertical:10,
    }
});
let examples = [
  {
    title: 'Perspective',
    description: 'perspective: 850, rotateX: Animated.timing(0 -> 360)',
    render(): ReactElement<any> { return <Flip />; }
  },
  {
    title: 'Translate, Rotate, Scale',
    description: "translateX: 100, translateY: 50, rotate: '30deg', scaleX: 2, scaleY: 2",
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.box1} />
        </View>
      );
    }
  },
  {
    title: 'Scale, Translate, Rotate, ',
    description: "scaleX: 2, scaleY: 2, translateX: 100, translateY: 50, rotate: '30deg'",
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.box2} />
        </View>
      );
    }
  },
  {
    title: 'Rotate',
    description: "rotate: '30deg'",
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.box3step1} />
        </View>
      );
    }
  },
  {
    title: 'Rotate, Scale',
    description: "rotate: '30deg', scaleX: 2, scaleY: 2",
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.box3step2} />
        </View>
      );
    }
  },
  {
    title: 'Rotate, Scale, Translate ',
    description: "rotate: '30deg', scaleX: 2, scaleY: 2, translateX: 100, translateY: 50",
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.box3step3} />
        </View>
      );
    }
  },
  {
    title: 'Translate, Scale, Rotate',
    description: "translate: [200, 350], scale: 2.5, rotate: '-0.2rad'",
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.box4} />
        </View>
      );
    }
  },
  {
    title: 'Translate, Rotate, Scale',
    description: "translate: [-50, 35], rotate: '50deg', scale: 2",
    render() {
      return (
        <View style={styles.container}>
          <View style={[styles.box5, styles.box5Transform]} />
        </View>
      );
    }
  }
];

class TransformExplorer extends Component{
     static propTypes = {
         title:React.PropTypes.string,
         navigator: React.PropTypes.object
     };
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <LayoutHeader {...this.props}/>
                <ScrollView>
                    {examples.map((obj,index)=>{
                        return (
                        <View key={index} >
                            <Text style={layoutStyle.title}> {obj.title}</Text>
                            {obj.description ? (<Text>{obj.description}</Text>): null}
                            <View style={layoutStyle.exampleContent}>
                                {obj.render()}
                            </View>
                        </View>);
                    })}
                </ScrollView>
            </View>
        );
    }
}
export {TransformExplorer as transform}