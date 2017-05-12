import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    View
} from 'react-native';

import ViewApp from '../components-ui/view-app.js';
import Button from '../components-core/Button.js';

module.exports = class Home extends ViewApp {

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
                    <Button textStyle={styles.text} position={styles.button} onPress={this.onButtonPress.bind(this, 'Rutinas')} text='Rutinas' />
                    <Button textStyle={styles.text} position={styles.button} onPress={this.onButtonPress.bind(this, 'Cronometro')} text='Cronometro' />
                    <Button textStyle={styles.text} position={styles.button} onPress={this.onButtonPress.bind(this, 'RegistroTiempos')} text='Registro Tiempos' />
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
        top: height/2 -140,
        width: 300
    },
    img: {
        width: width,
        height: height / 3
    },
    button: {
        margin: 10,
        backgroundColor: '#819ff7',
        borderWidth: 1,
        borderColor: 'white'
    },
    text: {
        fontSize: 23,
        color: 'white',
        textAlign: 'center',
        padding: 6
    }
});
