import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
  TouchableOpacity
} from 'react-native';
import Util from '../utils/base';
import {connect} from 'react-redux';
import {Header} from '../Components/public/Header';
const styles = StyleSheet.create({
  searchRow:{
    height: 35,
    marginTop:10,
    flexDirection:'row'
  },
  searchBtn:{
    justifyContent:'center',
    alignItems:'center',
    width:80,
    marginHorizontal:5,
    borderRadius:5,
    backgroundColor:'#abcdef'
  },
  searchBtnText:{
    fontWeight:'bold',
    fontSize:16,
    color:'#fff'
  },
  searchTextInput: {
     flex:1,
     marginLeft:5,
     backgroundColor:'white',
     color:'#777',
     borderColor: Util.themeColor,
     borderRadius: 3,
     borderWidth: Util.pixel,
     paddingLeft: 8,
  }
});
class MainPage extends Component{
  constructor(props){
    super(props);
  }
  static propTypes = {
    navigator: React.PropTypes.object,
    title: React.PropTypes.string,
  };
  _renderTextInput(): ?ReactElement<any> {
      return (
        <View style={styles.searchRow}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={text => {
              console.log(text);
            }}
            placeholder="Search..."
            style={[styles.searchTextInput]}
          />
          <TouchableOpacity style={styles.searchBtn}>
              <Text style={styles.searchBtnText}>搜索</Text>
          </TouchableOpacity>
        </View>
      );
  }
  _renderListView(){
    return (
      <ListView />
    );
  }
  render(){
    return (
      <View>
       <Header title={this.props.title}/>
       {this._renderTextInput()}
      </View>
    )
  }
}
export default connect(state=>{
  const {mainInfo} = state;
  return {
    mainInfo
  }
})(MainPage);
