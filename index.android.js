/**
 * 导入ReactNative包，引用ReactNative组件
 * AppRegistry: JS运行所有ReactNative应用入口
 * StyleSheet： ReactNative中使用的样式表，类似CSS样式
 */
import React, {Component} from 'react'
import Header from './compent/Header'
import News from './compent/News'
import Search from './compent/Search'
import ImgaeC from './compent/ImgaeC'
import MyScrollView from './MyScrollView'
import MovieList from './MovieList'
import MyListView from './MyListView'
import MoveListView from './MoveListView'
import ListViewFormHttp from './ListViewFormHttp'
import {
    AppRegistry,
    StyleSheet,
    Navigator,
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
 * styles拼接，后面的会覆盖前面的属性
 */
export default class HelloReactNative extends Component {
    render() {
        let defaultName = "List"
        let defaultComponent = MyListView
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route, navigator) => {
                    let Component = route.component
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        )
    }
}

/**
 * flex 可以给组件指定flex，flex的值是数字
 * flex：1表示组件可以撑满父组件所有的剩余空间
 * 同时存在多个并列的子组件， flex：1，均分,如果值不为1就是按比例分
 */
//程序入口
AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative)
