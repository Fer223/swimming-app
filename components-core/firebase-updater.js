import React, { Component } from 'react';
import {
    Button,
    TextInput,
    View
} from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
    databaseURL: 'https://tp-aplicacion.firebaseio.com/'
};
var myFirebaseRef = firebase.initializeApp(firebaseConfig).database().ref();

module.exports = class firebaseUpdater extends Component {

    render () {
        return(
            <View>

                <Button
                    onPress={this.onButtonPress}
                    title="Learn More"
                />
            </View>
        );
    }

    onButtonPress () {
        myFirebaseRef.push({wep: 'funco'})
    }
};
