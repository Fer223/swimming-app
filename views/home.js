import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    View
} from 'react-native';

import Button from '../components-core/Button.js';

module.exports = class Home extends Component {

    render () {
        return (
            <View>
                <Image
                    style={styles.img}
                    source={require('../assets/nadador.jpg')}
                />
                <Image
                    style={styles.img}
                    source={require('../assets/pileta.jpg')}
                />
                <Image
                    style={styles.img}
                    source={require('../assets/nadadora.jpg')}
                />
                <View style={styles.buttonSection}>
                    <Button onPress={this.onButtonPress.bind(this, 'Rutinas')} text='Rutinas' />
                    <Button onPress={this.onButtonPress.bind(this, 'Cronometro')} text='Cronometro' />
                    <Button onPress={this.onButtonPress.bind(this, 'RegistroTiempos')} text='Registro Tiempos' />
                </View>
            </View>
        );
    }

    onButtonPress (view) {
        this.props.navigator.push({
            id: view
        });
    }
};

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    buttonSection: {
        position: 'absolute',
        left: width /2 -150,
        top: height/2,
        width: 300,
        margin: 30
    },
    img: {
        width: width,
        height: height / 3
    }
});
