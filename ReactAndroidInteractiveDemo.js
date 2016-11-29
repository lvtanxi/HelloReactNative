import React, {Component} from 'react'
import CustToolbarAndroid from './compent/CustToolbarAndroid'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    View
} from 'react-native';

import ToastCustomAndroid from './CustDemo'


export default class ReactAndroidInteractiveDemo extends Component {
    state={
        back:"",
        wode:"ceshi"
    }
    _onPressButton=()=>{
        
    }
    render() {
        return (
            <View>
                <CustToolbarAndroid title="自定义弹出Toast消息" {...this.props} />

                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{flex:1,height:100, backgroundColor:"#FFE5D7",alignItems: "center",justifyContent:"center",margin:5}}><Text>Button</Text></View>
                    </TouchableNativeFeedback>

                <CustomButton
                    text="点击自定义Toast方法"
                    onPress={()=>ToastCustomAndroid.toast("我是ToastCustomAndroid弹出消息")}
                />
                <CustomButton
                    text="点击测试封装方法"
                    onPress={()=>ToastCustomAndroid.measureLayout((msg) => {
                    console.log(msg);
                  },
                   (x, y, width, height) => {
                        this.setState({
                            back:x + '坐标,' + y + '坐标,' + width + '宽,' + height+'高'
                        })
                       console.log( this.state)
                  })}
                />
                <CustomButton
                    text={this.state.back}
                    onPress={()=>ToastCustomAndroid.toast("我是ToastCustomAndroid弹出消息")}
                />
            </View>
        );
    }
}

class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
//onPress={()=>NativeModules.ToastCustomAndroid.show("我是ToastCustomAndroid弹出消息",NativeModules.ToastCustomAndroid.SHORT)}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
});