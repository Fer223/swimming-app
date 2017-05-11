import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

import AppNavigator from './app-navigator.js';
import firebaseHandler from './firebase-handler';

module.exports = class App extends Component {

    render () {
        return <AppNavigator />;
    }
};
