import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ToastAndroid
} from 'react-native';

import * as firebase from 'firebase';
import Button from '../components-core/Button.js';
import ViewApp from '../components-ui/view-app.js';

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
                <Text>{(this.state.isRegistred) ? 'Login' : 'Sing in'}</Text>
                <TextInput
                    placeholder="Email"
                    onChangeText={(text) => this.setState({email: text})}
                    keyboardType='email-address'
                />
                <TextInput
                    placeholder="password"
                    onChangeText={(text) => this.setState({password: text})}
                    onSubmitEditing={methodToPerform}
                    //secureTextEntry={true} TODO: descomentar
                />
                <Button
                onPress={() => this.setState({isRegistred: !this.state.isRegistred})}
                text={(this.state.isRegistred) ? 'Todavia no tenes cuenta?' : 'Volver a login'} />
            </View>
        );
    }

    singup () {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.login();
                ToastAndroid.show('Success sing up', ToastAndroid.SHORT);
            })
            .catch((err) => {
                ToastAndroid.show('Success sing up' + err.message, ToastAndroid.SHORT);
            });
    }

    login () {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                console.log(res.email);
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
