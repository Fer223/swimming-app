import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

module.exports = class Home extends Component {

    render () {
        return (
            <View style={styles.container}>
                <Text>soy el home</Text>
            </View>
        );
    }
};
