import React, {Component} from 'react'
import CustToolbarAndroid from './compent/CustToolbarAndroid'
import {
    StyleSheet,
    ListView,
    TouchableNativeFeedback,
    Image,
    Dimensions,
    Text,
    View
} from 'react-native';
const { width, height } = Dimensions.get('window')
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
    "ScrollableTabViewDemo"
]

export default class GridViewDemo extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (oldRow, newRow) => oldRow != newRow})
        this.state = {
            dataSource: ds.cloneWithRows(contens)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <CustToolbarAndroid title="GridDemo" {...this.props}/>
                <ListView
                    dataSource={this.state.dataSource}
                    colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                    renderRow={(rowData,sectionId, rowId) =>
                     <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} >
                    <View style={styles.itemViewStyle}>
                        <Image source={require("./imags/logo.jpg")} style={styles.itemIconStyle}/>
                        <Text style={styles.itemTitleStyle}>{rowData}</Text>
                    </View>
                </TouchableNativeFeedback>
                }
                    contentContainerStyle={styles.listStyle}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listStyle:{
        flexDirection:'row', //改变ListView的主轴方向
        flexWrap:'wrap', //换行
    },
    itemIconStyle:{
        width:60,
        height:60
    },
    itemTitleStyle:{
        marginTop:8
    },
    container: {
        flex: 1,
    },
    itemViewStyle:{
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 3,
        height:100,
        borderColor:"#0FFFCA",
        borderRadius:10,
        borderWidth:1
    },
    itemTitleStyle:{
        marginTop:8
    }
})
