import React, {Component} from 'react'
import CustToolbarAndroid from './compent/CustToolbarAndroid'
import {
    AppRegistry,
    Image,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ViewPagerAndroid,
    StyleSheet,
    View
} from 'react-native';

var PAGES = 5;
var BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
var IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];

export default class ViewPagerDemo extends Component {

    state = {
        page: 0,
        animationsAreEnabled: true,
        progress: {
            position: 0,
            offset: 0,
        },
    }

    onPageSelected = (e) => {
        this.setState({page: e.nativeEvent.position});
    }

    onPageScroll = (e) => {
        this.setState({progress: e.nativeEvent});
    }

    render() {
        return (
            <View style={styles.container}>
                <CustToolbarAndroid title="ViewPagerAndroid" {...this.props}/>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageScroll={this.onPageScroll}
                    onPageSelected={this.onPageSelected}
                    ref={viewPager => { this.viewPager = viewPager; }}>
                    {
                        IMAGE_URIS.map((item, index) => {
                            var pageStyle = {
                                backgroundColor: BGCOLOR[index % BGCOLOR.length],
                                flex: 1,
                                alignItems: 'stretch'
                            };
                            return ( <View key={index} style={pageStyle} collapsable={false}>
                                <Image
                                    style={styles.image}
                                    source={{uri: item}}
                                />
                            </View>)
                        })
                    }
                </ViewPagerAndroid>
            </View>
        )
    }
}
var styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        flex: 1,
    },
    viewPager: {
        flex: 1,
    },
});