/**
 * 导入ReactNative包，引用ReactNative组件
 * AppRegistry: JS运行所有ReactNative应用入口
 * StyleSheet： ReactNative中使用的样式表，类似CSS样式
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelloReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
        </View>
        <View style={styles.bottom}>
      </View>
      </View>
    );
  }
}

const  styles =StyleSheet.create({
  container:{
    marginTop:25,
    backgroundColor:"red",
    width:300,
    height:400
  },
  top:{
    backgroundColor:"green",
    width:280,
    height:250,
    margin:10,
    borderWidth:3,
    borderColor:"black"
  },
  bottom:{
    backgroundColor:"yellow",
    width:280,
    height:110,
    margin:10
  }
})

//程序入口
AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
