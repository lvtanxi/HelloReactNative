import React, {Component} from 'react'

import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Text,
    View
} from 'react-native';

/**
 *
 * react-native 提供了3个组件用于给其他没有触摸时间的组件绑定触摸事件
 * TouchableOpacity 透明触摸，点击时，组件会出现透明过度效果
 * TouchableHighlight 高亮触摸，点击时，组件会出现高亮效果
 * TouchableWithoutFeedback 无反惯性触摸，点击时，组件无变化
 *
 */

export default class Search extends Component {

    state={
        inputText:""
    }
    getContent = (text) =>{
        this.setState({
            inputText:text
        })
    }

    clickBtn(){
        alert(this.state.inputText)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.flex} returnKeyType="search" placeholder="请输入内容" onChangeText={this.getContent}></TextInput>
                <TouchableOpacity style={styles.btn} onPress={this.clickBtn.bind(this)}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height:45,
        marginTop:25
    },
    flex:{
        flex:1
    },
    input:{
        height:45,
        borderWidth:1,
        borderColor:"#CCC",
        marginLeft:5,
        paddingLeft:5,
        borderRadius:15
    },
    btn:{
        width:55,
        marginLeft:5,
        marginRight:5,
        backgroundColor:"#23BEFF",
        height:45,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    search:{
        color:"#FFF",
        fontSize:15,
        fontWeight:"bold"
    }
})
