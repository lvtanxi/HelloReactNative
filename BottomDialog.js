import React, {Component} from 'react'
import {
    StyleSheet,
    Animated,
    Easing,
    Image,
    View
} from 'react-native';
let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;//宽
let totalHeight = Dimensions.get('window').height;//高

export default class BottomDialog extends Component {
    state = {
        bottomAnim: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(this.state.bottomAnim, {
            toValue: totalHeight / 2,
            duration: 5000,
            easing: Easing.bounce,
        }).start()
    }

    render() {
        return (
            <View style={styles.confirmCont}>
                <Animated.View style={{
                bottom:this.state.bottomAnim
            }}>
                    <Image source={require('./imags/logo.jpg')} style={styles.image}/>
                </Animated.View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    confirmCont: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        position: 'absolute',  //声明绝对定位
        top: 0,
        width: totalWidth,
        height: totalHeight,
        backgroundColor: 'rgba(52,52,52,0.5)'  //rgba  a0-1  其余都是十进制数
    },
    Image:{
        width:50,
        height:50,
        position:"absolute",
        bottom:0
    }
})