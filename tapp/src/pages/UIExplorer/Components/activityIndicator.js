import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';



class ToggleAnimatingActivityIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }
  componentDidMount() {
    this.setToggleTimeout();
  }
  componentWillUnmount() {
    clearTimeout(this._timer);
  }
  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  }

  render() {
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
    );
  }
}

let examples = [
  {
    title: 'Default (small, white)',
    render() {
      return (
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="white"
        />
      );
    }
  },
  {
    title: 'Gray',
    render() {
      return (
        <View>
          <ActivityIndicator
            style={[styles.centering]}
          />
          <ActivityIndicator
            style={[styles.centering, {backgroundColor: '#eeeeee'}]}
          />
        </View>
      );
    }
  },
  {
    title: 'Custom colors',
    render() {
      return (
        <View style={styles.horizontal}>
          <ActivityIndicator color="#0000ff" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#00aa00" />
        </View>
      );
    }
  },
  {
    title: 'Large',
    render() {
      return (
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          size="large"
          color="white"
        />
      );
    }
  },
  {
    title: 'Large, custom colors',
    render() {
      return (
        <View style={styles.horizontal}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
          <ActivityIndicator
            size="large"
            color="#aa00aa"
          />
          <ActivityIndicator
            size="large"
            color="#aa3300"
          />
          <ActivityIndicator
            size="large"
            color="#00aa00"
          />
        </View>
      );
    }
  },
  {
    title: 'Start/stop',
    render() {
      return <ToggleAnimatingActivityIndicator />;
    }
  },
  {
    title: 'Custom size',
    render() {
      return (
        <ActivityIndicator
          style={[styles.centering, {transform: [{scale: 1.5}]}]}
          size="large"
        />
      );
    }
  },
  {
    platform: 'android',
    title: 'Custom size (size: 75)',
    render() {
      return (
        <ActivityIndicator
          style={styles.centering}
          size={1}
        />
      );
    }
  },
];


const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

class ActivityIndicatorExplorer extends Component{
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
export {ActivityIndicatorExplorer as activityIndicator};