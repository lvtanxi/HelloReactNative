import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    RefreshControl,
    View
} from 'react-native';

export default class MyScrollView extends Component {

    _onScrollBeginDrag() {
        console.log("拖拽开始");
    }

    _onScrollEndDrag() {
        console.log("拖拽结束");
    }

    _onMomentumScrollBegin() {
        console.log("开始滑动");
    }

    _onMomentumScrollEnd() {
        console.log("滑动結束");
    }

    _onRefresh(){
        alert("asdf")
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}
                            showsVerticalScrollIndicator={true}
                            onScrollBeginDrag={this._onScrollBeginDrag()}
                            onScrollEndDrag={this._onScrollEndDrag()}
                            onMomentumScrollBegin={this._onMomentumScrollBegin}
                            onMomentumScrollEnd={this._onMomentumScrollEnd}
                            refreshControl={
                                <RefreshControl
                                refreshing={true}
                                tintColor="red"
                                title="正在刷新"
                                onRefresh={this._onRefresh}/>
                            }>
                    <View style={styles.view_1}></View>
                    <View style={styles.view_2}></View>
                    <View style={styles.view_3}></View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cyan"
    },
    scroll: {
        marginTop: 25,
        backgroundColor: "#CCCCCC"
    },
    view_1: {
        margin: 15,
        flex: 1,
        height: 300,
        backgroundColor: "yellow"
    },
    view_2: {
        margin: 15,
        flex: 1,
        height: 300,
        backgroundColor: "blue"
    },
    view_3: {
        margin: 15,
        flex: 1,
        height: 300,
        backgroundColor: "yellow"
    }
})