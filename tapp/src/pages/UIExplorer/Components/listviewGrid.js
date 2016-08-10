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

/* eslint no-bitwise: 0 */
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};
var styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  row: {
    justifyContent: 'center',
    padding: 5,
    margin: 3,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
});
class ListViewGridLayoutExample extends React.Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRow({}))
        } 
    }
  componentWillMount() {
    this._pressData = {};
  }
  render() {
    return (
      // ListView wraps ScrollView and so takes on its properties.
      // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
      <ListView
        style={{height:400}}
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        //initialListSize={21}
        pageSize={3} // should be a multiple of the no. of visible cells per row
        scrollRenderAheadDistance={500}
        renderRow={this._renderRow.bind(this)}
      />
    );
  }
  _renderRow(rowData: string, sectionID: number, rowID: number) {
    var rowHash = Math.abs(hashCode(rowData));
    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor="transparent">
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  _genRow(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 100; ii++) {
      var pressedText = pressData[ii] ? ' (X)' : '';
      dataBlob.push('Cell ' + ii + pressedText);
    }
    return dataBlob;
  }
  _pressRow(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRow(this._pressData)
    )});
  }
}





let examples = [
    {
        title:'ListViewExample',
        description:'ListViewExample',
        render: function(){
            return (<ListViewGridLayoutExample />);
        }
    }
];


class ListGridExplorer extends Component{
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
export {ListGridExplorer as listgrid};