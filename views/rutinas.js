import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabbedArea from '../components-core/tabbed-area.js';
import ViewApp from '../components-ui/view-app.js';

var tabs = [
    {
        text: 'principieante'
    },
    {
        text: 'intermedio'
    },
    {
        text: 'avanzado'
    }
];

module.exports = class Rutinas extends ViewApp {

    render () {
        return (
            <View>
                <Text style={styles.title}>Rutinas</Text>
                <TabbedArea tabs={tabs} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: 'blue',
        textAlign: 'center'
    }
});
