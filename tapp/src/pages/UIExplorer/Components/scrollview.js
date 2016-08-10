import React,{Component} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';
import {Button} from './button';
import Util from '../../../utils/base';
let examples = [
{
  title: '<ScrollView>',
  description: 'To make content scrollable, wrap it within a <ScrollView> component',
  render: function() {
    var _scrollView: ScrollView;
    return (
      <View>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          //pagingEnabled={true}
          onContentSizeChange={(contentWidth,contentHeight)=>console.log(contentWidth,contentHeight)}
          onScroll={(e) => { console.log(e),console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          {THUMBS.map(createThumbRow)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView.scrollTo({y: 0}); }}>
          <Text>Scroll to top</Text>
        </TouchableOpacity>
      </View>
    );
  }
}, {
  title: '<ScrollView> (horizontal = true)',
  description: 'You can display <ScrollView>\'s child components horizontally rather than vertically',
  render: function() {
    var _scrollView: ScrollView;
    return (
      <View>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          horizontal={true}
          style={[styles.scrollView, styles.horizontalScrollView]}>
          {THUMBS.map(createThumbRow)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { _scrollView.scrollTo({x: 0}); }}>
          <Text>Scroll to start</Text>
        </TouchableOpacity>
      </View>
    );
  }
},{
      title:'simple scroll view',
      description:'scrollView in ScrollView',
      render:function(){
          const NUM_ITEMS = 20;
          var styles = StyleSheet.create({
                    verticalScrollView: {
                        margin: 10,
                        height: Util.size.height
                    },
                    itemWrapper: {
                        backgroundColor: '#dddddd',
                        alignItems: 'center',
                        borderRadius: 5,
                        borderWidth: 5,
                        borderColor: '#a52a2a',
                        padding: 30,
                        margin: 5,
                    },
                    horizontalItemWrapper: {
                        padding: 50
                    }
                });
          class ScrollViewSimpleExample extends Component{
              makeItems = (nItems:number,styles):Array<any> => {
                var items=[];
                for(var i=0;i<nItems;i++){
                    items[i] = (
                        <TouchableOpacity key={i} style={styles}>
                            <Text>
                            {'Item' + i}
                            </Text>
                        </TouchableOpacity>
                    );
                }
                return items;
              };
              render(){
                  var items = this.makeItems(NUM_ITEMS,styles.itemWrapper);
                  items[4] = (
                    <ScrollView key={'scrollView'} horizontal={true}>
                        {this.makeItems(NUM_ITEMS, [styles.itemWrapper, styles.horizontalItemWrapper])}
                    </ScrollView>
                    );
                  var verticalScrollView = (
                    <ScrollView style={styles.verticalScrollView}>
                        {items}
                    </ScrollView>
                    );
                  return  verticalScrollView;
              }
          }
          return <ScrollViewSimpleExample ref={(aa)=>console.log(aa)}/>
      }
  }
];

class Thumb extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={{uri:this.props.uri}} />
      </View>
    );
  }
}
var THUMBS = [
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
    'http://facebook.github.io/react-native/img/header_logo.png',
]

THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  }
});

class ScrollViewExplorer extends Component{
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
export {ScrollViewExplorer as scrollview};