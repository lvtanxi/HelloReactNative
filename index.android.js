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
import {
    AppRegistry,
    StyleSheet,
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
        let news = ["人民日报：降低刑事责任年龄不应为极端个案左右","河北省委书记省长批示：迅速对辖区枯井排查填埋","李克强：确保农村贫困人口同步进入全面小康"]
        return (
            <View style={[styles.flex,styles.container]}>
                <View style={styles.item}>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={styles.txt}>酒店</Text>
                    </View>
                    <View style={[styles.flex,styles.lineLeftRight]}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text style={styles.txt}>海外酒店</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.txt}>特价酒店</Text>
                        </View>
                    </View>
                    <View style={styles.flex}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text style={styles.txt}>团购</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.txt}>名宿.客栈</Text>
                        </View>

                    </View>
                </View>
                <ImgaeC />
                <Search />

                <Header />
                <News news={news}/>
            </View>
        );
    }
}

    const styles = StyleSheet.create({
    container:{
        marginTop:25,
        backgroundColor:"#F2F2F2"
    },
    flex:{
        flex:1
    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    item:{
        flexDirection:"row",
        backgroundColor:"#FF607C",
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        height:80,
        borderRadius:5
    },
    lineLeftRight:{
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor:"white"
    },
    lineCenter:{
        borderBottomWidth:1,
        borderColor:"white"
    },
    txt:{
       color:"white"
    }
})

/**
 * flex 可以给组件指定flex，flex的值是数字
 * flex：1表示组件可以撑满父组件所有的剩余空间
 * 同时存在多个并列的子组件， flex：1，均分,如果值不为1就是按比例分
 */
//程序入口
AppRegistry.registerComponent('HelloReactNative', () => MovieList);
