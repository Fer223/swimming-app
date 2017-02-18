import React, { Component } from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

module.exports = class Home extends Component {

    render () {
        return (
            <View>
                <Image
                    style={{width: 400, height: 220}}
                    source={require('../assets/nadador.jpg')}
                />
                <View style={styles.buttonSection}>
                    <Button onPress={this.onButtonPress.bind(this, 'Rutinas')} title='Rutinas' />
                    <Button onPress={this.onButtonPress.bind(this, 'Cronometro')} title='Cronometro' />
                    <Button onPress={this.onButtonPress.bind(this, 'Estadisticas')} title='Estadisticas' />
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

const styles = StyleSheet.create({
    buttonSection: {
        width: 300,
        margin: 30
    }
});
