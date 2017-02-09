import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

module.exports = class Home extends Component {

    render () {
        return (
            <View>
                <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.title}>Home</Text>
                </TouchableHighlight>
            </View>
        );
    }

    onButtonPress () {
        this.props.navigator.push({
            id: 'Dos'
        });
    }
};

const styles = StyleSheet.create({
    title: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    }
});
