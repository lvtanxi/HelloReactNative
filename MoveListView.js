import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Image,
    Text,
    View
} from 'react-native';

let movieDatas = require("./data.json")

let movies = movieDatas.movies

export default class MoveListView extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (oldRow, newRow)=>oldRow !== newRow})
        this.state={
            dataSource:ds.cloneWithRows(movies)
        }
    }
    _renderRow(movie){
        return (
            <View style={styles.row} key={movie.id}>
                <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
                <View style={styles.rightCon}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }
    _renderHeader(){
        return (
            <View style={styles.header}>
                <Text style={styles.header_text}>Movies List</Text>
                <View style={styles.header_line}></View>
            </View>
        )
    }
    _renderSeparator(sectionId,rowId){
        return (
            <View style={styles.separator} key={sectionId+rowId}></View>
        )
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderHeader={this._renderHeader}
                renderSeparator={this._renderSeparator}
                initialListSize={10}/>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    row:{
        flexDirection:"row",
        padding:5,
        margin:3,
        alignItems:"center",
        backgroundColor:"#F5FCFF",
        borderRadius:10,
        borderColor:"gray",
        borderWidth:0.1
    },
    thumbnail:{
        width:81,
        height:81,
        borderRadius:10,
    },
    rightCon:{
        marginLeft:10,
        flex:1
    },
    title:{
        fontSize:18,
        marginTop:3,
        marginBottom:3,
        textAlign:"center"
    },
    year:{
        marginBottom:3,
        textAlign:"center"
    },
    header:{
        height:44,
        backgroundColor:"#F5FCFF"
    },
    header_text:{
        flex:1,
        fontSize:20,
        textAlign:"center",
        lineHeight:44
    },
    header_line:{
        height:1,
        backgroundColor:"#CCCCCC"
    },
    separator:{
        height:1,
        backgroundColor:"#CCCCCC"
    }
})
