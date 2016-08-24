import React,{Component} from 'react';
import {
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import actionCreaters from '../Actions';

import CustomBadgeView from '../components/CustomBadge';
import BillListView from './BillList';
import NotifyView from './Notify';

import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';

import Utils from '../Utils';
const styles = StyleSheet.create({
    itemIcon:{
        width:100,
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center'
    }
});
class MainPage extends Component{
    _changeTab(tag){
        let{dispatch} = this.props;
        let currentTab = {
            [tag]:{
                selected:true,
                badage:0
            }
        };
        dispatch(actionCreaters.changeTab(currentTab));
    }
    render(){
        let {tabStatus,navigator} = this.props;
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={tabStatus.billList.selected}
                    title="账单列表"
                    renderIcon={() => <Icon name="ios-list-box-outline" style={styles.itemIcon} size={20} color={Utils.themeColor}/>}
                    renderSelectedIcon={() => <Icon name="ios-list-box-outline" style={styles.itemIcon} size={20} color={Utils.themeColor}/>}
                    badgeText = {tabStatus.billList.badage}
                    onPress={() => this._changeTab('billList')}>
                    <BillListView navigator={navigator}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={tabStatus.notify.selected}
                    title="通知"
                    renderIcon={() => <Icon name="ios-list-box-outline" style={styles.itemIcon} size={20} color={Utils.themeColor}/>}
                    renderSelectedIcon={() => <Icon name="ios-list-box-outline" style={styles.itemIcon} size={20} color={Utils.themeColor}/>}
                    renderBadge={() => tabStatus.notify.badage > 0 ?  <CustomBadgeView badage={tabStatus.notify.badage} /> : null}
                    onPress={() => this._changeTab('notify')}>
                    <NotifyView navigator={navigator}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
export default connect((state)=>{
    const {tabStatus} = state;
    return{
        tabStatus
    }
})(MainPage);