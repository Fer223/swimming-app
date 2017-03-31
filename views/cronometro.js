import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

class Chronometer extends Component {

    constructor () {
        super();

        this.state = {
            counting: false,
            result: '00:00:00',
            timeout: null,

            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    render () {
        return (
            <View>
                <View>
                    <Text style={styles.cronometro}>{this.state.result}</Text>
                </View>
                <View>
                    <Button onPress={this.handleStartStopPress.bind(this)} title={this.getButtonLabel()}>
                        {this.getButtonLabel()}
                    </Button>
                    <Button title="Guardar" onPress={this.handleSavePress.bind(this)} />
                </View>
            </View>
        );
    }

    handleStartStopPress () {
        if (!this.state.counting) {
            this.startCount();
        } else {
            this.stopCount();
        }
    }

    startCount () {
        this.setState({
            counting: true,
            timeout: setInterval(this.timer.bind(this), 1000)
        });
    }

    timer () {
        let sec = this.state.seconds;
        let min = this.state.minutes;
        let hs = this.state.hours;

        sec++;

        if (sec === 60) {
            sec = 0;
            min++;

            if (min === 60) {
                min = 0;
                hs++;
            }
        }

        let result = this.getResult(hs, min, sec);

        this.setState({
            hours: hs,
            minutes: min,
            seconds: sec,
            result: result
        });
    }

    getResult (hs, min, sec) {
        return this.leadingZero(hs) + ':' + this.leadingZero(min) + ':' + this.leadingZero(sec);
    }

    leadingZero (val) {
        return (val < 10) ? '0' + val : val;
    }

    stopCount () {
        clearInterval(this.state.timeout);

        this.setState({
            counting: false,
            timeout: null
        });
    }

    getButtonLabel () {
        return (this.state.counting) ? 'Detener' : 'Comenzar';
    }

    handleSavePress () {
        this.props.onSavePress(this.state.result);
    }
};

const styles = StyleSheet.create({
    cronometro: {
        fontSize: 50,
        textAlign: 'center',
        margin: 60
    }
});

module.exports = Chronometer;