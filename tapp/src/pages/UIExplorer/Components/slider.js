
import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Slider
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';


class SliderExample extends React.Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  render() {
    return (
      <View>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}

class SlidingCompleteExample extends React.Component {
  state = {
    slideCompletionValue: 0,
    slideCompletionCount: 0,
  };

  render() {
    return (
      <View>
        <SliderExample
          {...this.props}
          onSlidingComplete={(value) => this.setState({
              slideCompletionValue: value,
              slideCompletionCount: this.state.slideCompletionCount + 1})} />
        <Text>
          Completions: {this.state.slideCompletionCount} Value: {this.state.slideCompletionValue}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

let examples = [
  {
    title: 'Default settings',
    render(): ReactElement<any> {
      return <SliderExample />;
    }
  },
  {
    title: 'Initial value: 0.5',
    render(): ReactElement<any> {
      return <SliderExample value={0.5} />;
    }
  },
  {
    title: 'minimumValue: -1, maximumValue: 2',
    render(): ReactElement<any> {
      return (
        <SliderExample
          minimumValue={-1}
          maximumValue={2}
        />
      );
    }
  },
  {
    title: 'step: 0.25',
    render(): ReactElement<any> {
      return <SliderExample step={0.25} />;
    }
  },
  {
    title: 'onSlidingComplete',
    render(): ReactElement<any> {
      return (
        <SlidingCompleteExample />
      );
    }
  },
  {
    title: 'Custom min/max track tint color',
    platform: 'ios',
    render(): ReactElement<any> {
      return (
        <SliderExample
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'green'}
        />
      );
    }
  },
  {
    title: 'Custom thumb image',
    platform: 'ios',
    render(): ReactElement<any> {
      return <SliderExample thumbImage={require('../img/uie_thumb_big.png')} />;
    }
  },
  {
    title: 'Custom track image',
    platform: 'ios',
    render(): ReactElement<any> {
      return <SliderExample trackImage={require('../img/slider.png')} />;
    }
  },
  {
    title: 'Custom min/max track image',
    platform: 'ios',
    render(): ReactElement<any> {
      return (
        <SliderExample
          minimumTrackImage={require('../img/slider-left.png')}
          maximumTrackImage={require('../img/slider-right.png')}
        />
      );
    }
  },
];

class SliderExplorer extends Component{
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

export {SliderExplorer as slider};