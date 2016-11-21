import React, {Component} from 'react'
import {
    ToolbarAndroid,
    Navigator,
    BackAndroid,
    View
} from 'react-native';

export default class CustToolbarAndroid extends Component {
    constructor() {
        super();
        this.handleBack = this.handleBack.bind(this);
    }

    static defaultProps = {
        tltle: "",
        actions: [],
        actionSelected (position) {
            console.log(position)
        }
    }

    handleBack() {
        let navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
    }


    render() {
        return (
            <ToolbarAndroid
                navIcon={require('./../imags/ic_back.png')}
                title={this.props.title}
                actions={this.props.actions}
                style={{height: 56, backgroundColor: '#ffffff'}}
                onActionSelected={this.props.actionSelected}
                onIconClicked={this.handleBack}/>
        )
    }
}