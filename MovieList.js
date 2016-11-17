import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    RefreshControl,
    Text,
    Image,
    View
} from 'react-native';

let movieDatas = require("./data.json")

let movies = movieDatas.movies

export default class MovieList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    {
                        movies.map((movie, index)=> {
                            return (
                                <View key={index} style={styles.row}>
                                    <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
                                    <View style={styles.rightCon}>
                                        <Text style={styles.title}>{movie.title}</Text>
                                        <Text style={styles.year}>{movie.year}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
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
    }
})