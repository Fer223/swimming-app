import React, { Component } from 'react';
import {
    BackAndroid,
    View
} from 'react-native';

module.exports = class ViewApp extends Component {

    componentDidMount () {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.props.title !== 'Home') {
                this.props.navigator.pop();
                return true;
            }
            return false;
        });
    }

    componentWillUnmount () {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    render () {
        return (
            <View>
                {this.props.children}
            </View>
        );
    }
};
