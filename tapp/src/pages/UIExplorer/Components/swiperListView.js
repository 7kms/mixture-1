import React,{Component} from 'react';
import {
  Image,
  SwipeableListView,
  TouchableHighlight,
  StyleSheet,
  RecyclerViewBackedScrollView,
  Text,
  View,
  Alert,
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';

var SwipeableListViewSimpleExample = React.createClass({
  statics: {
    title: '<SwipeableListView>',
    description: 'Performant, scrollable, swipeable list of data.'
  },

  getInitialState: function() {
    var ds = SwipeableListView.getNewDataSource();
    return {
      dataSource: ds.cloneWithRowsAndSections(...this._genDataSource({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  render: function() {
    return (
        <SwipeableListView
          style={{height:400}}
          dataSource={this.state.dataSource}
          maxSwipeDistance={100}
          renderQuickActions={(rowData: Object, sectionID: string, rowID: string) => {
            return (<View style={styles.actionsContainer}>
              <TouchableHighlight onPress={() => {
                Alert.alert('Tips', 'You could do something with this row: ' + rowData.text);
              }}>
                <Text>Remove</Text>
              </TouchableHighlight>
            </View>);
          }}
          renderRow={this._renderRow}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
          renderSeparator={this._renderSeperator}
        />
    );
  },
  _renderRow: function(rowData: Object, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    var rowHash = Math.abs(hashCode(rowData.id));
    var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <TouchableHighlight onPress={() => {}}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={styles.text}>
              {rowData.id + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _genDataSource: function(pressData: {[key: number]: boolean}): Array<any> {
    var dataBlob = {};
    var sectionIDs = ['Section 0'];
    var rowIDs = [[]];
    /**
     * dataBlob example below:
      {
        'Section 0': {
          'Row 0': {
            id: '0',
            text: 'row 0 text'
          },
          'Row 1': {
            id: '1',
            text: 'row 1 text'
          }
        }
      }
    */
    // only one section in this example
    dataBlob['Section 0'] = {};
    for (var ii = 0; ii < 100; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob[sectionIDs[0]]['Row ' + ii] = {id: 'Row ' + ii, text: 'Row ' + ii + pressedText};
      rowIDs[0].push('Row ' + ii);
    }
    return [dataBlob, sectionIDs, rowIDs];
  },

  _renderSeperator: function(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }
});

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
  row: {
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
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

let examples = [
    {
        title:'SwipeableListViewSimpleExample',
        description:'SwipeableListViewSimpleExample',
        render:function(){
            return <SwipeableListViewSimpleExample/>
        }
    }
];

class SwiperListViewExplorer extends Component{
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
export {SwiperListViewExplorer as swiperListview};