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
import {mainPageGetInfo} from '../actions/MainPageActions';
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
    dispatch: React.PropTypes.func,
    MainPageListInfo: React.PropTypes.array.isRequired
  };
  ComponentWillMount(){
    const {dispatch,MainPageListInfo} = this.props;
    if(MainPageListInfo.length < 1){
      dispatch(mainPageGetInfo());
    }
  }
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
  _rendowRow(rowData){
    console.log(rowData);
    return (
      <View>
        <Text>{rowData.title}</Text>
      </View>
    );
  }
  _renderListView(){
    let {MainPageListInfo} = this.props;
    if(MainPageListInfo.length < 1){
      return null;
    }
    let dataSource = ds.cloneWithRows(MainPageListInfo);
    return (
      <ListView 
        dataSource={dataSource}
        renderRow={this._renderRow}
      />
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
  const {MainPageListInfo} = state;
  return {
    MainPageListInfo
  }
})(MainPage);
