import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import ViewApp from '../components-ui/view-app.js';

module.exports = class Rutina extends ViewApp {

    render () {
        return (
            <ScrollView>
                {this.props.rutinas.map(this.renderExercices)}
            </ScrollView>
        );
    }

    renderExercices (exercice, index) {
        return (
            <View style={styles.row} key={index} >
                <Text style={styles.text}>{exercice}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    row: {
        padding: 20
    }
});
