import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import Cronometro from '../views/cronometro.js';
import Estadisticas from '../views/estadisticas.js';
import Home from '../views/home.js';
import Login from '../views/login.js';
import Rutinas from '../views/rutinas.js';

export default class AppNavigator extends Component {
    render() {
        return (
            <Navigator initialRoute={{id: 'Home'}} renderScene={this.renderScene} />
        );
    }

    renderScene(route, navigator) {
        var component = route.id;

        switch (route.id) {
            case 'Home':
                return(<Home navigator={navigator} title='Home' />);
            case 'Login':
                return(<Login navigator={navigator} title='Login' />);
            case 'Rutinas':
                return(<Rutinas navigator={navigator} title='Rutinas' />);
            case 'Estadisticas':
                return(<Estadisticas navigator={navigator} title='Estadisticas' />);
            case 'Cronometro':
                return(<Cronometro navigator={navigator} title='Cronometro' />);
        }
    }
};
