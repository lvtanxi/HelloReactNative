import React, {Component} from 'react'
import InfoList from './InfoList'
import ViewPagerDemo from './ViewPagerDemo'
import DataPickerDemo from './DataPickerDemo'
import GuiDemo from './GuiDemo'
import ListViewFormHttp from './ListViewFormHttp'
import BottmTabDemo from './BottmTabDemo'
import RegisterLeaf from './RegisterLeaf'
import AnimatedDemo from './AnimatedDemo'
import ReactAndroidInteractiveDemo from './ReactAndroidInteractiveDemo'
import ScrollableTabViewDemo from './ScrollableTabViewDemo'
import GridViewDemo from './GridViewDemo'
import StatasBarDemo from './StatasBarDemo'
import ListSelectionDemo from './ListSelectionDemo'
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

let contens = [
    "Info List",
    "ViewPagerDemo",
    "DataPickerDemo",
    "GuiDemo",
    "ListViewFormHttp",
    "TabNavigator",
    "Dialog",
    "AnimatedDemo",
    "ReactAndroidInteractiveDemo",
    "ScrollableTabViewDemo",
    "GridViewDemo",
    "StatasBarDemo",
    "ListSelectionDemo"
]

export default class MyListView extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow != newRow})
        this.state = {
            dataSource: ds.cloneWithRows(contens)
        }
    }

    _pressButton(rowData,rowId) {
        const {navigator} = this.props
        var component = InfoList
        switch (parseInt(rowId)){
            case 1:
                component = ViewPagerDemo
                break
            case 2:
                component = DataPickerDemo
                break
            case 3:
                component=GuiDemo
                break
            case 4:
                component=ListViewFormHttp
                break
            case 5:
                component=BottmTabDemo
                break
            case 6:
                component=RegisterLeaf
                break
            case 7:
                component=AnimatedDemo
                break
            case 8:
                component=ReactAndroidInteractiveDemo
                break
            case 9:
                component=ScrollableTabViewDemo
                break
            case 10:
                component=GridViewDemo
                break
            case 11:
                component=StatasBarDemo
                break
            case 12:
                component=ListSelectionDemo
                break
        }
        if (navigator) {
            navigator.push({
                name: 'InfoList',
                component: component,
                params: {
                    message: rowData
                }
            })
        }
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData,sectionID, rowID) =>
                    <TouchableOpacity  onPress={this._pressButton.bind(this,rowData,rowID)}>
                        <Text style={styles.row}>{rowData}</Text>
                    </TouchableOpacity>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
    row: {
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        height: 50,
        fontSize: 20,
        color: "blue",
        borderBottomWidth: 0.1,
        borderColor: "#CCCCCC",
    }
})
