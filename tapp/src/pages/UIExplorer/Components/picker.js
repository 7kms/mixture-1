
import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Picker
} from 'react-native';
import  {DetailSection,DeatilLayout} from '../detailLayout';
const Item = Picker.Item;
var styles = StyleSheet.create({
  picker: {
    width: 100,
  },
});


 
let examples = [
  {
    title: 'Modal Presentation',
    render: () =>{

        class TestExample extends Component{
            constructor(props){
                super(props);
                this.state = {
                    selected1: 'key1',
                    selected2: 'key1',
                    selected3: 'key1',
                    color: 'red',
                    mode: Picker.MODE_DIALOG,
                };
            }
            changeMode() {
                const newMode = this.state.mode === Picker.MODE_DIALOG
                    ? Picker.MODE_DROPDOWN
                    : Picker.MODE_DIALOG;
                this.setState({mode: newMode});
            }
            onValueChange (key: string, value: string){
                const newState = {};
                newState[key] = value;
                this.setState(newState);
            }
            render(){
                return (
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this, 'selected1')}>
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                );
            }
        }
        return <TestExample />
    }
  },
   {
    title: 'Dropdown Picker',
    render: function() {
        class TestExample extends Component{
            constructor(props){
                super(props);
                this.state = {
                     selected1: 'key1',
                    selected2: 'key1',
                    selected3: 'key1',
                    color: 'red',
                    mode: Picker.MODE_DIALOG,
                };
            }
            changeMode() {
                const newMode = this.state.mode === Picker.MODE_DIALOG
                    ? Picker.MODE_DROPDOWN
                    : Picker.MODE_DIALOG;
                this.setState({mode: newMode});
            }
            onValueChange (key: string, value: string){
                const newState = {};
                newState[key] = value;
                this.setState(newState);
            }
            render(){
                return (
                     <Picker 
                        style={styles.picker}
                        itemStyle={{borderColor:'red',color:'red'}}
                        enabled={true} 
                        onValueChange={(value,index)=>console.log(value,value)}
                        selectedValue={this.state.selected1}>
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                );
            }
        }
        return <TestExample/>;
    },
  },
  {
    title: 'Picker with prompt message',
    description: 'Modals can be presented with or without animation',
    render: function() {
        class TestExample extends Component{
            constructor(props){
                super(props);
                this.state = {
                     selected1: 'key1',
                    selected2: 'key1',
                    selected3: 'key1',
                    color: 'red',
                    mode: Picker.MODE_DIALOG,
                };
            }
            changeMode() {
                const newMode = this.state.mode === Picker.MODE_DIALOG
                    ? Picker.MODE_DROPDOWN
                    : Picker.MODE_DIALOG;
                this.setState({mode: newMode});
            }
            onValueChange (key: string, value: string){
                const newState = {};
                newState[key] = value;
                this.setState(newState);
            }
            render(){
                return (
                     <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected3}
                        onValueChange={this.onValueChange.bind(this, 'selected3')}
                        prompt="Pick one, just one">
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                );
            }
        }
        return <TestExample/>;
    },
  },
 {
        title: 'Picker with no listener',
        description: 'Modals can be presented with or without animation',
        render: function() {
            class TestExample extends Component{
                constructor(props){
                    super(props);
                    this.state = {
                        selected1: 'key1',
                        selected2: 'key1',
                        selected3: 'key1',
                        color: 'red',
                        mode: Picker.MODE_DIALOG,
                    };
                }
                changeMode() {
                    const newMode = this.state.mode === Picker.MODE_DIALOG
                        ? Picker.MODE_DROPDOWN
                        : Picker.MODE_DIALOG;
                    this.setState({mode: newMode});
                }
                onValueChange (key: string, value: string){
                    const newState = {};
                    newState[key] = value;
                    this.setState(newState);
                }
                render(){
                    return (
                        <View>
                            <Picker style={styles.picker}>
                                <Item label="hello" value="key0" />
                                <Item label="world" value="key1" />
                            </Picker>
                            <Text>
                                Cannot change the value of this picker because it doesn't update selectedValue.
                            </Text>
                        </View>
                    );
                }
            }
            return <TestExample/>;
        },
    },
    {
        title: 'Colorful pickers',
        description: 'Modals can be presented with or without animation',
        render: function() {
            class TestExample extends Component{
                constructor(props){
                    super(props);
                    this.state = {
                        selected1: 'key1',
                        selected2: 'key1',
                        selected3: 'key1',
                        color: 'red',
                        mode: Picker.MODE_DIALOG,
                    };
                }
                changeMode() {
                    const newMode = this.state.mode === Picker.MODE_DIALOG
                        ? Picker.MODE_DROPDOWN
                        : Picker.MODE_DIALOG;
                    this.setState({mode: newMode});
                }
                onValueChange (key: string, value: string){
                    const newState = {};
                    newState[key] = value;
                    this.setState(newState);
                }
                render(){
                    return (
                        <View style={{flexDirection:'row'}}>
                            <Picker
                                style={[styles.picker, {color: 'white', backgroundColor: '#333'}]}
                                selectedValue={this.state.color}
                                onValueChange={this.onValueChange.bind(this, 'color')}
                                mode="dropdown">
                                <Item label="red" color="red" value="red" />
                                <Item label="green" color="green" value="green" />
                                <Item label="blue" color="blue" value="blue" />
                            </Picker>
                            <Picker
                                style={styles.picker}
                                selectedValue={this.state.color}
                                onValueChange={this.onValueChange.bind(this, 'color')}
                                mode="dialog">
                                <Item label="red" color="red" value="red" />
                                <Item label="green" color="green" value="green" />
                                <Item label="blue" color="blue" value="blue" />
                            </Picker>
                        </View>
                    );
                }
            }
            return <TestExample/>;
        },
    },
];

class PickerExplorer extends Component{
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
export {PickerExplorer as picker};