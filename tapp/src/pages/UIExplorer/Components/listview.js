import React,{Component} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  ListView,
  Text,
  View,
  TouchableHighlight,
  RecyclerViewBackedScrollView
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';
import {Button} from './button';
import Util from '../../../utils/base';

var THUMB_URLS = [
  require('../img/Thumbnails/like.png'),
  require('../img/Thumbnails/dislike.png'),
  require('../img/Thumbnails/call.png'),
  require('../img/Thumbnails/fist.png'),
  require('../img/Thumbnails/bandaged.png'),
  require('../img/Thumbnails/flowers.png'),
  require('../img/Thumbnails/heart.png'),
  require('../img/Thumbnails/liking.png'),
  require('../img/Thumbnails/party.png'),
  require('../img/Thumbnails/poke.png'),
  require('../img/Thumbnails/superlike.png'),
  require('../img/Thumbnails/victory.png'),
  ];
var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

/* eslint no-bitwise: 0 */
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
  gridContent:{
    // flexDirection:'row',
    // flexWrap:'wrap',
    // alignItems:'flex-start',
    // justifyContent:'space-around'
  },
  row: {
    //width:150,
    marginBottom:10,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});
let examples = [
    {
        title:'ListViewSimpleExample',
        description:'ListViewSimpleExample',
        render: function(){
            return (<ListViewSimpleExample />);
        }
    }
];
class ListViewSimpleExample extends React.Component{
  constructor(props){
      super(props);
       var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.state = {
           dataSource: ds.cloneWithRows(this._genRows({}))
       };
  }
  componentWillMount() {
    this._pressData = {};
  }
  render() {
    return (
      <ListView
          style={{height:400}}
          //contentContainerStyle={styles.gridContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderScrollComponent={props => {
              console.log(props);
              return <RecyclerViewBackedScrollView {...props} />;
          }}
          renderSeparator={this._renderSeparator}
        />
    );
  }
  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    console.log("render-row",{...arguments})
    return (
      <TouchableHighlight onPress={() => {
          this._pressRow(rowID);
          highlightRow(sectionID, rowID);
        }}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  _genRows(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 100; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  }
  _pressRow(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  }
  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
      console.log("_renderSeparator ",{...arguments});
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? 'blue' : 'red',
        }}
      />
    );
  }
}


class ListViewExplorer extends Component{
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
export {ListViewExplorer as listview};