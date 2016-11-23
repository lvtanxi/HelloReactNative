import React, {Component} from 'react'
import CustToolbarAndroid from './compent/CustToolbarAndroid'
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Image,
    Text,
    ToastAndroid,
    View
} from 'react-native';
/**
 *   contentContainerStyle 可以设置成网格布局
 */
let REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
export default class ListViewFormHttp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow != newRow})
        }
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>

                </View>
            </View>
        );
    }

    render() {
        if (!this.state.loaded)
            return this.renderLoadingView()
        return (
            <View>
                <CustToolbarAndroid title="网络请求" {...this.props}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie}
                    initialListSize={10}
                    removeClippedSubviews={true}
                    style={styles.listView}/>
            </View>
        )
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在网络上获取电影数据……
                </Text>
            </View>
        );
    }

    componentDidMount() {
        fetch(REQUEST_URL)
            .then(reaponse => reaponse.json())
            .then(responseData => {
                this.setState({
                    loaded: true,
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies)
                })
            }).catch(error=>{
                ToastAndroid.show(error.toString(),ToastAndroid.SHORT)
            }).done()
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,

    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },

});