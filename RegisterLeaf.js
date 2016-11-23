import React, {Component} from 'react'
import CustAlert from './CustAlert'
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

let Dimensions = require('Dimensions');// 宽高
let totalWidth = Dimensions.get('window').width;  //声明了三个变量,根据屏幕动态变化
let leftStartPoint = totalWidth * 0.1;
let componentWidth = totalWidth * 0.8;

export default class RegisterLeaf extends Component {
    //构造函数, 组件创建的时候会执行
    constructor(props) {
        super(props); //必须有这句代码 父组件向子组件传递属性, 比如styles属性等
        // 声明状态机的初始值
        this.state = {
            inputedNum: '',
            inputedPw: '',
            needToConfirm: true //导入新的状态机
        };
        // ES6
        this.userPressConfirm = this.userPressConfirm.bind(this);
        //方法不绑定 其它组件没法调用
        this.userConfirmed = this.userConfirmed.bind(this);
        this.userCanceled = this.userCanceled.bind(this);
    }

    // 定义函数
    updateNum(newText) {
        this.setState((state) => {
            return {
                inputedNum: newText
            }
        });
    }

    // 定义函数
    updatePW(newText) {
        this.setState(() => { // 用不到的参数也可以不用写
            return {
                inputedPw: newText
            }
        });
    }

    userPressConfirm() {
        this.setState(() => {
            return {
                needToConfirm: true
            }
        });

    }

    // 对话框取消时如何处理
    userCanceled() {
        this.setState({needToConfirm: false});
        console.log("userPressConfirm");

    }

    // 对话框确定
    userConfirmed() {
        this.setState({needToConfirm: false});
        this.props.navigator.push({
            phoneNumber: this.state.inputedNum,
            userPW: this.state.inputedPw,
            name: 'waiting'
        })
    }


    renderWithDialog() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.numberInputStyle}
                           keyboardType={'phone-pad'}
                           placeholder={'请输入手机号'}
                           onChangeText={(newText)=>this.updateNum(newText)}/>

                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput secureTextEntry={true}
                           style={styles.passwordInputStyle}
                           placeholder='请输入密码'
                           onChangeText={(newText)=>this.updatePW(newText)}/>
                <Text style={styles.bigTextPrompt}
                      onPress={this.userPressConfirm}>
                    注  册
                </Text>
                <CustAlert userConfirmed={this.userConfirmed}
                           userCanceled={this.userCanceled}
                           promptToUser={'使用'+this.state.inputedNum+'号码登录?'}/>
            </View>
        )
    }

    // 绘制渲染的控件
    render() {
        // 根据不同的状态 做相应的绘制，当需要绘制对话框时，调用renderWithDialog
        if (this.state.needToConfirm)  return this.renderWithDialog();
        return (
            <View style={styles.container}>
                <TextInput style={styles.numberInputStyle}
                           keyboardType={'phone-pad'}
                           placeholder={'请输入手机号'}
                           onChangeText={(newText)=>this.updateNum(newText)}/>

                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput secureTextEntry={true}
                           style={styles.passwordInputStyle}
                           placeholder='请输入密码'
                           onChangeText={(newText)=>this.updatePW(newText)}/>
                <Text style={styles.bigTextPrompt}
                      onPress={this.userPressConfirm}>
                    注  册
                </Text>
            </View>
        );
    }
}
// 样式  const变量只能在声明的时候赋值一次
const styles = StyleSheet.create({
    //各个组件都没有定义高度,父View设置了flex1,他会沾满整个高度,子组件没有设置会包裹内容
    container: {
        flex: 1,  //表示宽高会自动扩展
        backgroundColor: 'white'
    },
    numberInputStyle: {
        top: 20,     // top left表示从父组件的顶端(左侧) 向下(向右) 多少位置显示
        left: leftStartPoint,
        // height:30,  // IOS开发需要加上该高度
        width: componentWidth,
        backgroundColor: 'gray',
        fontSize: 20
    },
    textPromptStyle: {
        top: 30,
        left: leftStartPoint,
        //  // height:30,  // IOS开发需要加上该高度 因为IOS中TextInput不会自动设置高度
        width: componentWidth,
        fontSize: 20
    },
    passwordInputStyle: {
        top: 50,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'gray',
        fontSize: 20
    },
    bigTextPrompt: {
        top: 70,
        left: leftStartPoint,
        width: componentWidth,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',//位置居中显示
        fontSize: 60
    }
});