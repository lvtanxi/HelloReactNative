import React, {Component} from 'react';
import CustToolbarAndroid from './compent/CustToolbarAndroid'
import {
    Alert,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
    Text,
    View
} from 'react-native';


export default class InfoList extends Component {

    acts(position){
        Alert.alert(
            '标题',
            "this is android alert",
            [
                {text: '取消', onPress: () =>   ToastAndroid.show('This is a toast with 取消', ToastAndroid.SHORT)},
                {text: '确定', onPress: () =>   ToastAndroid.show('This is a toast with 确定', ToastAndroid.SHORT)},
            ]
        )
    }


    render() {
        return (
            <View style={styles.bg}>
                <CustToolbarAndroid  {...this.props} title="子标题" actions={[{title: '关闭1', show: 'always'}]} actionSelected={this.acts}/>
                <View style={styles.content}>
                    <TouchableOpacity>
                        <Text>你跳过来了,你传递的消息是：</Text>
                        <View>
                            <Text>{this.props.message}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    bg: {
        backgroundColor: '#E3E3E3',
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'red',
        fontSize: 17,
    },
});