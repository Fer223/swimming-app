import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import Cronometro from '../views/cronometro.js';
import RegistroTiempos from '../views/registro-tiempos.js';
import Home from '../views/home.js';
import Login from '../views/login.js';
import Rutina from '../views/rutina.js';
import Rutinas from '../views/rutinas.js';

export default class AppNavigator extends Component {

    render () {
        return (
            <Navigator initialRoute={{id: 'Login'}} renderScene={this.renderScene} />
        );
    }

    renderScene (route, navigator) {
        switch (route.id) {
            case 'Login':
                return(<Login navigator={navigator} title='Login' />);
            case 'Home':
                return(<Home navigator={navigator} title='Home' />);
            case 'Rutinas':
                return(<Rutinas navigator={navigator} title='Rutinas' />);
            case 'RegistroTiempos':
                return(<RegistroTiempos navigator={navigator} timeResults={route.resultados} title='RegistroTiempos' />);
            case 'Cronometro':
                return(<Cronometro navigator={navigator} title='Cronometro' />);
            case 'Rutina':
                return(<Rutina navigator={navigator} title='Rutina' rutinas={route.rutinas} />);
        }
    }
};
