import React, { Component } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    TextInput,
    ToastAndroid
} from 'react-native';

import * as firebase from 'firebase';
import Button from '../components-core/Button.js';
import ViewApp from '../components-ui/view-app.js';
import firebaseHandler from '../components-core/firebase-handler.js';

module.exports = class Login extends ViewApp {
    constructor () {
        super();

        this.state = {
            email: '',
            password: '',
            isRegistred: true
        }
    }

    render () {
        let methodToPerform = (this.state.isRegistred) ?
            this.login.bind(this) :
            this.singup.bind(this);

        return (
            <View>
                <Text style={{textAlign: 'center', fontSize: 25, margin: 30}}>{(this.state.isRegistred) ? 'Login' : 'Sing up'}</Text>
                <TextInput
                    placeholder="Email"
                    onChangeText={(text) => this.setState({email: text})}
                    keyboardType='email-address'
                    style={{margin: 20}}
                />
                <TextInput
                    placeholder="password"
                    onChangeText={(text) => this.setState({password: text})}
                    onSubmitEditing={methodToPerform}
                    secureTextEntry={true}
                    style={{margin: 20}}
                />
                <Button
                    onPress={() => this.setState({isRegistred: !this.state.isRegistred})}
                    text={(this.state.isRegistred) ? 'Todavia no tenes cuenta?' : 'Volver a login'}
                    textStyle={{textAlign: 'center', fontSize: 20, marginTop: 15}}
                 />
            </View>
        );
    }

    singup () {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                firebaseHandler.pushDefaultRecord(res.uid).catch((err) => console.warn(err));
                this.login();
                ToastAndroid.show('Sing up exitoso', ToastAndroid.SHORT);
            })
            .catch((err) => {
                ToastAndroid.show('Success sing up' + err.message, ToastAndroid.SHORT);
            });
    }

    login () {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                AsyncStorage.setItem('userId', res.uid),
                this.redirectToHome();
            })
            .catch((err) => {
                ToastAndroid.show('Success sing up' + err.message, ToastAndroid.SHORT);
            })

    }

    redirectToHome () {
        this.props.navigator.push({
            id: 'Home'
        });
    }
};
