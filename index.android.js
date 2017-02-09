import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import AppNavigator from './components-core/app-navigator.js'

export default class swimmingApp extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
};

AppRegistry.registerComponent('swimmingApp', () => swimmingApp);
