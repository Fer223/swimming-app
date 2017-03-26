import * as firebase from 'firebase';

const firebaseConfig = {
    databaseURL: 'https://tp-aplicacion.firebaseio.com/'
};
var myFirebaseRef = firebase.initializeApp(firebaseConfig).database().ref();

module.exports = {

    push () {
        myFirebaseRef.push({wep: 'funco'})
    }
};
