import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Util from '../utils/base';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {Header} from '../Components/public/Header';
import {mainPageFilterInfo} from '../actions/MainPageActions';
import * as MainPageListObj from '../resource/mainPageData';
import UIExplorer from './UIExplorer';
let ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged:(h1,h2) => h1!==h2
});
let isFilter = false;
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
  },
  listContent:{
    paddingHorizontal:10,
    paddingVertical:10
  },
  listItem:{
    height:60,
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor: Util.themeColor,
    borderBottomWidth: Util.pixel
  },
  itemIcon:{
    width:100,
    textAlign: 'center',
    alignItems:'center',
    justifyContent:'center'
  },
  itemDesc:{
    flex:1,
    color:'#777'
  },
  emptyContent:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  emptyText:{
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:10,
  },
  sectionTitle:{
    padding:10,
    textAlign:'center',
    backgroundColor: Util.themeColor,
    color:'white',
    fontWeight:'bold'
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
    MainPageFilterObj: React.PropTypes.object
  };
  _filterData(filter){
    if(filter){
      isFilter = true
    }else{
      isFilter = false
    }
    this.props.dispatch(mainPageFilterInfo(filter,MainPageListObj));
  }
  _goDetail(rowData){
    console.log(rowData.componentName);
    let Component = UIExplorer[rowData.componentName];
    console.log(Component);
    this.props.navigator.push({
      title:rowData.title,
      component:Component
    });
  }
  _renderTextInput(): ?ReactElement<any> {
      return (
        <View style={styles.searchRow}>
          <TextInput
            ref="searchInput"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={text=>this._filterData(text)}
            placeholder="Search..."
            style={[styles.searchTextInput]}
          />
          <TouchableOpacity 
            style={styles.searchBtn}
            onPress={()=>{
              let filter = this.refs['searchInput']._lastNativeText;
              this._filterData(filter);
            }}>
              <Text style={styles.searchBtnText}>搜索</Text>
          </TouchableOpacity>
        </View>
      );
  }
  _renderSection(sectionData,sectionId){
    return(
      <Text style={styles.sectionTitle}>{sectionId}</Text>
    );
  }
  _renderRow(rowData){
    return (
      <TouchableHighlight  
        underlayColor="#abcdef"
        activeOpacity={0.5}
        onPress={()=>this._goDetail(rowData)}>
        <View style={styles.listItem}>
          <Icon name={rowData.icon} style={styles.itemIcon} size={20} color={Util.themeColor}/>
          <Text numberOfLines={1} style={styles.itemDesc}>{rowData.title}</Text>
          <Icon name='ios-arrow-forward' style={[styles.itemIcon,{textAlign:'right',color:'#999'}]} size={20} color={Util.themeColor}/>
        </View>
      </TouchableHighlight>
    );
  }
  _renderListView(){
    let dataObj = isFilter ? this.props.MainPageFilterObj : MainPageListObj;
    let { ComponentsList,ApisList } = dataObj;
    let dataSource = ds.cloneWithRowsAndSections({
      Components: ComponentsList,
      Apis: ApisList
    });
    let total = ComponentsList.length + ApisList.length;
    let listView = total >0 ? (
      <ListView
        style={{flex:1}}
        enableEmptySections = {true}
        contentContainerStyle={styles.listContent}
        dataSource={dataSource}
        renderRow={this._renderRow.bind(this)}
        renderSectionHeader={this._renderSection.bind(this)}
      />
      ):(
        <View style={styles.emptyContent}>
          <Icon name="ios-outlet-outline" size={200} color={Util.themeColor}/>
          <Text style={styles.emptyText}>木有搜索结果~</Text>
      </View>
      );
    return listView;
  }
  render(){
    this._renderTextInput.bind(this);
    return (
      <View style={{flex:1}}>
       <Header title={this.props.title}/>
       {this._renderTextInput()}
       {this._renderListView()}
      </View>
    )
  }
}
export default connect(state =>{
  const {MainPageFilterObj} = state;
  return {
    MainPageFilterObj
  }
})(MainPage);
