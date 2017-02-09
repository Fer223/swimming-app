import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import Home from '../views/home.js';
import Dos from '../views/login.js';

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
            case 'Dos':
                return(<Dos navigator={navigator} title='Dos' />);
        }
    }
};
