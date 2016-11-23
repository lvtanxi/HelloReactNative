import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class BottmTabDemo extends Component {

    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
            selectedTab: 'home',
        };
    }

    render() {

        var homeView = (

            <View style={[styles.flex, styles.center,{backgroundColor:'#ffff0044'}]}>
                <Text style={{ fontSize: 22 }}>我是主页</Text>
            </View>
        )
        var settingView = (

            <View style={[styles.flex, styles.center,{backgroundColor:'#ff000044'}]}>
                <Text style={{ fontSize: 22 }}>我是设置页面</Text>
            </View>
        )
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require("./imags/h_n.png")} />}
                    renderSelectedIcon={() => <Image source={require("./imags/h_p.png")} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image source={require("./imags/s_n.png")} />}
                    renderSelectedIcon={() => <Image source={require("./imags/s_p.png")} />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    {settingView}
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({

    flex: {
        flex: 1,
    },

    img: {
        width: 40,
        height: 33,
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',


    },



});
