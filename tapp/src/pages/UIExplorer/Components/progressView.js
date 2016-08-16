
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  ProgressViewIOS,
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
console.log(TimerMixin);
import  {DetailSection,DeatilLayout} from '../detailLayout';
var styles = StyleSheet.create({
  container: {
    marginTop: -20,
    backgroundColor: 'transparent',
  },
  progressView: {
    marginTop: 20,
  }
});
var ProgressViewExample = React.createClass({
  mixins: [TimerMixin],

  getInitialState() {
    return {
      progress: 0,
    };
  },

  componentDidMount() {
    this.updateProgress();
  },

  updateProgress() {
    var progress = this.state.progress + 0.01;
    this.setState({ progress });
    this.requestAnimationFrame(() => this.updateProgress());
  },

  getProgress(offset) {
    var progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) % 1;
  },

  render() {
    return (
      <View style={styles.container}>
        <ProgressViewIOS style={styles.progressView} progress={0.6}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={this.getProgress(0.2)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={this.getProgress(0.4)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={this.getProgress(0.6)}/>
        <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={this.getProgress(0.8)}/>
      </View>
    );
  },
});

let examples = [{
  title: 'ProgressViewIOS',
  render() {
    return (
      <ProgressViewExample/>
    );
  }
}];

class ProgressViewExplorer extends Component{
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
export {ProgressViewExplorer as progressView};