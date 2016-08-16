
import React,{Component} from 'react';
import {
  SegmentedControlIOS,
  Text,
  View,
  StyleSheet
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';


class BasicSegmentedControlExample extends React.Component {
  render() {
    return (
      <View>
        <View style={{marginBottom: 10}}>
          <SegmentedControlIOS values={['One', 'Two']} />
        </View>
        <View>
          <SegmentedControlIOS values={['One', 'Two', 'Three', 'Four', 'Five']} />
        </View>
      </View>
    );
  }
}

class PreSelectedSegmentedControlExample extends React.Component {
  render() {
    return (
      <View>
        <View>
          <SegmentedControlIOS values={['One', 'Two']} selectedIndex={0} />
        </View>
      </View>
    );
  }
}

class MomentarySegmentedControlExample extends React.Component {
  render() {
    return (
      <View>
        <View>
          <SegmentedControlIOS values={['One', 'Two']} momentary={true} />
        </View>
      </View>
    );
  }
}

class DisabledSegmentedControlExample extends React.Component {
  render() {
    return (
      <View>
        <View>
          <SegmentedControlIOS enabled={false} values={['One', 'Two']} selectedIndex={1} />
        </View>
      </View>
    );
  }
}

class ColorSegmentedControlExample extends React.Component {
  render() {
    return (
      <View>
        <View style={{marginBottom: 10}}>
          <SegmentedControlIOS tintColor="#ff0000" values={['One', 'Two', 'Three', 'Four']} selectedIndex={0} />
        </View>
        <View>
          <SegmentedControlIOS tintColor="#00ff00" values={['One', 'Two', 'Three']} selectedIndex={1} />
        </View>
      </View>
    );
  }
}

class EventSegmentedControlExample extends React.Component {
  state = {
    values: ['One', 'Two', 'Three'],
    value: 'Not selected',
    selectedIndex: undefined
  };

  render() {
    return (
      <View>
        <Text style={styles.text} >
          Value: {this.state.value}
        </Text>
        <Text style={styles.text} >
          Index: {this.state.selectedIndex}
        </Text>
        <SegmentedControlIOS
          values={this.state.values}
          selectedIndex={this.state.selectedIndex}
          onChange={this._onChange}
          onValueChange={this._onValueChange} />
      </View>
    );
  }

  _onChange = (event) => {
      console.log("onchange",event);
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
  };

  _onValueChange = (value) => {
    console.log("onvaluechange",value);
    this.setState({
      value: value,
    });
  };
}

var styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

let examples = [
  {
    title: 'Segmented controls can have values',
    render(): ReactElement<any> { return <BasicSegmentedControlExample />; }
  },
  {
    title: 'Segmented controls can have a pre-selected value',
    render(): ReactElement<any> { return <PreSelectedSegmentedControlExample />; }
  },
  {
    title: 'Segmented controls can be momentary',
    render(): ReactElement<any> { return <MomentarySegmentedControlExample />; }
  },
  {
    title: 'Segmented controls can be disabled',
    render(): ReactElement<any> { return <DisabledSegmentedControlExample />; }
  },
  {
    title: 'Custom colors can be provided',
    render(): ReactElement<any> { return <ColorSegmentedControlExample />; }
  },
  {
    title: 'Change events can be detected',
    render(): ReactElement<any> { return <EventSegmentedControlExample />; }
  }
];

class SegmentedControlIOSExplorer extends Component{
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

export {SegmentedControlIOSExplorer as segmentedControlIos};