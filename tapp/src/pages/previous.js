import React , {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import actionCreaters from '../actions';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor:'green'
  }
})

class Previous extends Component{
  constructor(props) {
    super(props)
  }
  static propTypes = {
    previousItems:React.PropTypes.array.isRequired,
    dispatch:React.PropTypes.func.isRequired
  };
  _changeStyle(){
      const {previousTitleChange} = actionCreaters;
      const {dispatch,previousItems} = this.props;
      dispatch(previousTitleChange(previousItems));
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Swiper showsButtons={true}>
          {this.props.previousItems.map((item, key) => {
            return (
              <View key={key} style={styles[item.css]}>
                <TouchableHighlight onPress={()=>this._changeStyle()}>
                  <Text style={styles.text}>{item.title}</Text>
                </TouchableHighlight>
              </View>
            )
          })}
        </Swiper>
      </View>
    )
  }
}
export default connect(state=>{
  const {previousItems} = state;
  return {
    previousItems
  }
})(Previous);
