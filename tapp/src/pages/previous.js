import React , {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import actionCreaters from '../actions';
import { connect } from 'react-redux';
import MainPage from './mainPage';
import Swiper from 'react-native-swiper';
import CustomComponents from '../Components/public';
import Util from '../utils/base';
import Icon from 'react-native-vector-icons/Ionicons';

const {CustomButton,Header} = CustomComponents;
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    backgroundColor: '#abcdef'
  },
  slide2: {
    backgroundColor: '#97CAE5'
  },
  slide3: {
    backgroundColor: '#53cac3'
  },
  swiperView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    backgroundColor:'transparent',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  entrance:{
    position:'absolute',
    top:250,
    left:Util.size.width/2 -50,
    width:100,
    paddingVertical:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,199,.3)'
  },
  enterText:{
    fontWeight:'bold',
    fontSize:20,
    color:'green',
    textAlign:'center',
  }
})
const renderPagination = (index,total,context) => {
  return (
    <View style={{position:'absolute',right:10,bottom:10}}>
      <Text style={{fontSize:18,color:'#fff'}}>
        <Text style={{color: '#007aff',fontSize:14,fontWeight:'bold'}}>
          {index + 1}
        </Text>/{total}
      </Text>
    </View>
  )
}
class Previous extends Component{
  constructor(props) {
    super(props)
  }
  static propTypes = {
    previousItems:React.PropTypes.array.isRequired,
    showPreviousEntrance: React.PropTypes.bool,
    navigator: React.PropTypes.object,
    dispatch:React.PropTypes.func.isRequired,
    title:React.PropTypes.string
  };
  generateHeader(){
    const leftButton = (<CustomButton text='NAVITE' icon={<Icon name="ios-arrow-back" size={20} color="#fff"/>} onPress={()=>this._backToNative()}/>);
    const customHeader = (<Header title={this.props.title} leftButton={leftButton}/>);
    return customHeader;
  }
  _backToNative(){
    console.log("back to native")
  }
  _onMomentumnScrollEnd(e,state,context){
    if(state.index == (state.total - 1)){
      this.props.dispatch(actionCreaters.showPreviousEntrance(true));
    }else{
      this.props.dispatch(actionCreaters.showPreviousEntrance(false));
    }
  }
  _entranceApp(){
    const {navigator} = this.props;
    navigator.push({
      title:'我的主页',
      component:MainPage
    })
  }
  _changeStyle(){
      const {previousTitleChange} = actionCreaters;
      const {dispatch,previousItems} = this.props;
      dispatch(previousTitleChange(previousItems));
  }
  render() {
    let customNav = this.generateHeader();
    return (
    <View style={{flex:1}}>
      {customNav}
      <View style={{flex:1}}>
        <Swiper
          horizontal={false}
          autoplay={true}
          height={150}
          dot= {<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDot= {<View style={{backgroundColor:'rgba(255,255,255,.6)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          >
          <View style={[styles.swiperView,styles.slide1,{backgroundColor:'red'}]}>
            <Image
              style={{flex:1,resizeMode:'cover',width:Util.size.width, justifyContent:'center',alignItems:'center'}}
              source={{uri:'http://f.hiphotos.baidu.com/image/h%3D200/sign=4db5130a073b5bb5a1d727fe06d2d523/cf1b9d16fdfaaf51965f931e885494eef11f7ad6.jpg'}}
              >
              <Text style={[styles.text]}>ARE</Text>
            </Image>
          </View>
          <View style={[styles.swiperView,styles.slide2,{backgroundColor:'green'}]}>
            <Image
              style={{flex:1,resizeMode:'cover',width:Util.size.width, justifyContent:'center',alignItems:'center'}}
              source={{uri:'http://pic7.nipic.com/20100609/5136651_124423001651_2.jpg'}}
              >
              <Text style={[styles.text]}>YOU</Text>
            </Image>
          </View>
          <View style={[styles.swiperView,styles.slide3]}>
            <Image
              style={{flex:1,resizeMode:'cover',width:Util.size.width, justifyContent:'center',alignItems:'center'}}
              source={{uri:'http://pic10.nipic.com/20101020/3650425_202918301404_2.jpg'}}
              >
              <Text style={[styles.text]}>READY</Text>
            </Image>
          </View>
        </Swiper>
        <Swiper
          height={Util.size.height - Util.size.navHeight- 150}
          paginationStyle={{backgroundColor:'green'}}
          loop={false}
          renderPagination = {renderPagination}
          onMomentumScrollEnd = {this._onMomentumnScrollEnd.bind(this)}
          >
          {this.props.previousItems.map((item, key) => {
            return (
              <View key={key} style={[styles.swiperView,styles[item.css]]}>
                <TouchableHighlight onPress={()=>this._changeStyle()}>
                  <Text style={styles.text}>{item.title}</Text>
                </TouchableHighlight>
              </View>
            )
          })}
        </Swiper>
        {
          this.props.showPreviousEntrance ? <TouchableHighlight style={styles.entrance} onPress={()=>this._entranceApp()}><Text style={styles.enterText}>ENTER</Text></TouchableHighlight> : null
        }
      </View>
    </View>
    )
  }
}
export default connect(state=>{
  const {previousItems,previousEntrance} = state;
  return {
    previousItems,
    showPreviousEntrance:previousEntrance
  }
})(Previous);