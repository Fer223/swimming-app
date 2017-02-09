import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

module.exports = class Dos extends Component {

    render () {
        return (
            <View>
                <Text>Login</Text>
                <TextInput/>
                <TextInput/>
            </View>
        );
    }
};
