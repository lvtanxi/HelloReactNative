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

let rows = {}



export default class ListSelectionFooterDemo extends Component {
    constructor(props) {
        super(props)
        for(var page=1; page<6; page++){
            rows["Header"+page] = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
        }
        console.log(rows)
        const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(rows)
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <CustToolbarAndroid title="GridDemo" {...this.props}/>
                <ListView
                    dataSource={this.state.dataSource}
                    colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                    renderFooter={this.renderFooter}
                    renderSectionHeader={this._renderSectionHeader.bind(this)}
                    renderRow={this.renderRow.bind(this)}
                    contentContainerStyle={styles.listStyle}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    renderRow(rowData){
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} >
                <View style={styles.itemViewStyle}>
                    <Text style={styles.itemTitleStyle}>{rowData}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
    _renderSectionHeader(data,id){
        return (
            <View style={{width: width,backgroundColor:"red",height:40,justifyContent:"center"}}>
                <Text>{id}</Text>
            </View>
        )
    }
    renderFooter=()=>{
        return (
            <View style={{width: width,backgroundColor:"red"}}>
                <Text>this is footer view</Text>
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
        width: width / 2,
        height:100,
        borderColor:"#0FFFCA",
        borderRadius:10,
        borderWidth:1
    },
    itemTitleStyle:{
        marginTop:8
    }
})
