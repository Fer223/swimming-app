import _ from 'lodash';
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabbedArea from '../components-core/tabbed-area.js';
import ViewApp from '../components-ui/view-app.js';
import rutinas from '../data/rutinas.js'

module.exports = class Rutinas extends ViewApp {

    render () {
        return (
            <View>
                <TabbedArea {...this.getTabbedAreaProps()} />
            </View>
        );
    }

    getTabbedAreaProps () {
        return {
            tabs: _.map(rutinas, 'categoria'),
            rutines: rutinas,
            handleTabElementPress: this.handleRoutinePress.bind(this)
        };
    }

    handleRoutinePress (rutinas) {
        this.props.navigator.push({
            id: 'Rutina',
            rutinas: rutinas
        });
    }
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: 'blue',
        textAlign: 'center'
    }
});
