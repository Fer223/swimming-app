import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

import ViewApp from '../components-ui/view-app.js';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

class Chronometer extends ViewApp {

    constructor(props) {
        super(props);
        this.state = {
            stopwatchStart: false,
            totalDuration: 90000,
            stopwatchReset: false,
        };
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    toggleStopwatch() {
        this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    }

    resetStopwatch() {
        this.setState({stopwatchStart: false, stopwatchReset: true});
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.watch}>
                    <Stopwatch msecs start={this.state.stopwatchStart} reset={this.state.stopwatchReset} />
                </View>
                <TouchableHighlight onPress={this.toggleStopwatch}>
                    <Text style={styles.text}>{!this.state.stopwatchStart ? "Comenzar" : "Detenerse"}</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.resetStopwatch}>
                    <Text style={styles.text}>Reset</Text>
                </TouchableHighlight>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: 570
    },
    watch: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: 'white'
    }
});

module.exports = Chronometer;