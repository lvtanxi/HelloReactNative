import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Image,
    View
} from 'react-native';
/**
 * Image 现实图片
 */
export default class ImgaeC extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.net}>
                    <Image  style={styles.localImage} source={require('../imags/ic_launcher.png')} />

                </View>
                <View style={styles.local}>
                    <Image style={styles.netImage} source={{uri:"http://pic33.nipic.com/20130916/3420027_192919547000_2.jpg"}}/>
                </View>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        height:400
    },
    net:{
        width:300,
        height:100,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"cyan"
    },
    netImage:{
        width:280,
        height:100,
        backgroundColor:"gray"
    },

    local:{
        width:300,
        height:100,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"cyan"
    },
    localImage:{
        width:180,
        height:100,
        backgroundColor:"gray"
    }
})