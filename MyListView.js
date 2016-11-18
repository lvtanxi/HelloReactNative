import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    View
} from 'react-native';

let contens=[
    "ListView item 0",
    "ListView item 1",
    "ListView item 2",
    "ListView item 3",
    "ListView item 4"
]

export default class MyListView extends Component {
    constructor(props){
        super(props)
        const ds =new ListView.DataSource({rowHasChanged:(oldRow,newRow)=>oldRow != newRow})
        this.state={
            dataSource:ds.cloneWithRows(contens)
        }
    }

    render() {
        return (
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={styles.row}>{rowData}</Text>}
                />
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:25
    },
    row:{
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        height:50,
        fontSize:20,
        color:"blue",
        borderBottomWidth:0.1,
        borderColor:"#CCCCCC"
    }
})
