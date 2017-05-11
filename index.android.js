import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import App from './components-core/app.js';

export default class swimmingApp extends Component {
    render() {
        return <App/>;
    }
};

AppRegistry.registerComponent('swimmingApp', () => swimmingApp);
