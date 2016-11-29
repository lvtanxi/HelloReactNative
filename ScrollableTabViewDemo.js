import React, {Component} from 'react'
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons';
import {
    StyleSheet,
    Text,
    Switch,
    ScrollView,
    View
} from 'react-native';
export default class ScrollableTabViewDemo extends Component {
    state = {
        switchOn: false
    }
    valueChange = (val) => {
        this.setState({
            switchOn: val
        })
    }

    render() {
        return (
            /* <ScrollableTabView
             renderTabBar={() => <DefaultTabBar />} style={styles.container}>
             <View tabLabel='Tab #1'>
             <Switch onValueChange={this.valueChange} value={this.state.switchOn}/>
             </View>
             <Text tabLabel='Tab #2'>favorite</Text>
             <Text tabLabel='Tab #3'>project</Text>
             </ScrollableTabView>*/
          /*  <ScrollableTabView
                style={{marginTop: 20, }}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
            >
                <Text tabLabel='Tab #1'>My</Text>
                <Text tabLabel='Tab #2 word word'>favorite</Text>
                <Text tabLabel='Tab #3 word word word'>project</Text>
                <Text tabLabel='Tab #4 word word word word'>favorite</Text>
                <Text tabLabel='Tab #5'>project</Text>
            </ScrollableTabView>*/
            <ScrollableTabView
                style={styles.container}
                renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
                tabBarPosition='overlayTop'
            >
                <ScrollView tabLabel='iOS'>
                    <Icon name='logo-apple' color='black' size={300} style={styles.icon} />
                    <Icon name='ios-phone-portrait' color='black' size={300} style={styles.icon} />
                    <Icon name='logo-apple' color='#DBDDDE' size={300} style={styles.icon} />
                    <Icon name='ios-phone-portrait' color='#DBDDDE' size={300} style={styles.icon} />
                </ScrollView>
                <ScrollView tabLabel='Android'>
                    <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon} />
                    <Icon name='logo-android' color='black' size={300} style={styles.icon} />
                    <Icon name='logo-android' color='brown' size={300} style={styles.icon} />
                </ScrollView>
            </ScrollableTabView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
});