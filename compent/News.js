import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class News extends Component {

    show(title){
        alert(title)
    }

    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.news_t}>今日要闻</Text>
                {  this.props.news.map((item, index)=> {
                    return (
                        <Text numberOfLines={2} key={index} style={styles.news_item} onPress={this.show.bind(this,item)}>{index + 1 + "、" + item}</Text>)
                })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    news_t: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#CD1D1C",
        marginLeft: 10,
        marginTop: 15
    },
    news_item: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        lineHeight: 28
    }
})