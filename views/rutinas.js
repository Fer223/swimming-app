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

import firebaseHandler from '../components-core/firebase-handler.js';

module.exports = class Rutinas extends ViewApp {
    constructor(){
        super();
        this.state = {
            rutinas: null
        };
    }

    componentWillMount () {
        firebaseHandler.retrieveRoutinesData()
            .then((data) => this.setState({rutinas: data}));
    }

    render () {
        return (
            <View>
                {this.loadAndRender()}
            </View>
        );
    }

    loadAndRender () {
        let element;

        if (!this.state.rutinas) {
            element = <Text style={styles.loadingLabel}>Cargando...</Text>;
        } else {
            element = <TabbedArea {...this.getTabbedAreaProps()} />;
        }

        return element;
    }

    getTabbedAreaProps () {
        return {
            tabs: _.map(this.state.rutinas, 'categoria'),
            rutines: this.state.rutinas,
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
    loadingLabel: {
        fontSize: 30,
        textAlign: 'center'
    }
});
