import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Easing,
    PanResponder
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';
import {Button as UIExplorerButton} from './button';

let examples = [
  {
    title: 'FadeInView',
    description: 'Uses a simple timing animation to ' +
      'bring opacity from 0 to 1 when the component ' +
      'mounts.',
    render: function() {
      class FadeInView extends Component {
        state: any;
        constructor(props) {
          super(props);
          this.state = {
              fadeAnimation: new Animated.Value(0)
          }
        }
        componentDidMount() {
            Animated.timing(this.state.fadeAnimation,{
                toValue:1,
                duration:3000
            }).start();
        }
        render() {
          return (
              <Animated.View
                style={{opacity:this.state.fadeAnimation}}
              >
                {this.props.children}
              </Animated.View>
          );
        }
      }
      class FadeInExample extends React.Component {
        state: any;
        constructor(props) {
          super(props);
          this.state = {
            show: true,
          };
        }
        render() {
          return (
            <View>
              <UIExplorerButton onPress={() => {
                  this.setState((state) => (
                    {show: !state.show}
                  ));
                }}>
                Press to {this.state.show ?
                  'Hide' : 'Show'}
              </UIExplorerButton>
              {this.state.show && <FadeInView>
                <View style={styles.content}>
                  <Text>FadeInView</Text>
                </View>
              </FadeInView>}
            </View>
          );
        }
      }
      return <FadeInExample />;
    },
  },
  {
    title: 'Transform Bounce',
    description: 'One `Animated.Value` is driven by a ' +
      'spring with custom constants and mapped to an ' +
      'ordered set of transforms.  Each transform has ' +
      'an interpolation to convert the value into the ' +
      'right range and units.',
    render: function() {
      let anim =  new Animated.Value(0);
      return (
        <View>
          <UIExplorerButton onPress={() => {
            Animated.spring(anim, {
              toValue: 0,   // Returns to the start
              velocity: 3,  // Velocity makes it move
              tension: -10, // Slow
              friction: 1,  // Oscillate a lot
            }).start(); 
          }
        }>
            Press to Fling it!
          </UIExplorerButton>
          <Animated.View
            style={[styles.content, {
              transform: [   // Array order matters
                {scale: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4],
                })},
                {translateX: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 500],
                })},
                {rotate: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', '360deg' // 'deg' or 'rad'
                  ],
                })},
              ]}
            ]}>
            <Text>Transforms!</Text>
          </Animated.View>
        </View>
      );
    }
  },
  {
      title: 'Composite Animations with Easing',
    description: 'Sequence, parallel, delay, and ' +
      'stagger with different easing functions.',
    render: function() {
        let anims = [1,2,3].map(
        () => new Animated.Value(0)
      );
      return (
        <View>
          <UIExplorerButton onPress={() => {
            var timing = Animated.timing;
            Animated.sequence([ // One after the other
              timing(anims[0], {
                toValue: 200,
                easing: Easing.linear,
              }),
              Animated.delay(400), // Use with sequence
              timing(anims[0], {
                toValue: 0,
                easing: Easing.elastic(2), // Springy
              }),
              Animated.delay(400),
              Animated.stagger(200,
                anims.map((anim) => timing(
                  anim, {toValue: 200}
                )).concat(
                anims.map((anim) => timing(
                  anim, {toValue: 0}
                ))),
              ),
              Animated.delay(400),
              Animated.parallel([
                Easing.inOut(Easing.quad), // Symmetric
                Easing.back(1.5),  // Goes backwards first
                Easing.ease        // Default bezier
              ].map((easing, ii) => (
                timing(anims[ii], {
                  toValue: 320, easing, duration: 3000,
                })
              ))),
              Animated.delay(400),
              Animated.stagger(200,
                anims.map((anim) => timing(anim, {
                  toValue: 0,
                  easing: Easing.bounce, // Like a ball
                  duration: 2000,
                })),
              ),
            ]).start(); }
        }>
            Press to Animate
          </UIExplorerButton>
          {['Composite', 'Easing', 'Animations!'].map(
            (text, ii) => (
              <Animated.View
                key={text}
                style={[styles.content, {
                  left: anims[ii]
                }]}>
                <Text>{text}</Text>
              </Animated.View>
            )
          )}
        </View>
      );
    }
    }
];

var styles = StyleSheet.create({
  content: {
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

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
                        <DetailSection key={index} {...obj}/>    
                        );
                })}
            </DeatilLayout>
        );
    }
}
export { AnimateExplorer as animate }
