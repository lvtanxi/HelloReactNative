import React, {Component} from 'react'
import Swper from 'react-native-swiper'
import CustToolbarAndroid from './compent/CustToolbarAndroid'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class GuiDemo extends Component {

    render() {
        return (

            <View>
                <CustToolbarAndroid title="引导页(是可以全屏的)" {...this.props}/>
                <Swper style={styless.wrapper} showsButtons={false} autoplay={true}>
                    <View style={styless.slide1}>
                        <Text style={styless.text}>this is my test 1</Text>
                    </View>
                    <View style={styless.slide2}>
                        <Text style={styless.text}>this is my test 2</Text>
                    </View>
                    <View style={styless.slide3}>
                        <Text style={styless.text}>this is my test 3</Text>
                    </View>
                </Swper>
            </View>
        )
    }
}

const styless=StyleSheet.create({
    wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

