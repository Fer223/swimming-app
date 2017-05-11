import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDaIX6zBzob_017PyX-cSsnCBeNPLvML7w",
    authDomain: "tp-aplicacion.firebaseapp.com",
    databaseURL: "https://tp-aplicacion.firebaseio.com",
    projectId: "tp-aplicacion",
    storageBucket: "tp-aplicacion.appspot.com",
    messagingSenderId: "334623765592"
};
firebase.initializeApp(config);

const firebaseRutinasRef = firebase.database().ref('rutinas');

var retrieveRoutinesData = function () {
    return new Promise((resolve, reject) => {
        firebaseRutinasRef.on('value', (data) => {
            resolve(data.val());
        });
    });
}

module.exports = {
    retrieveRoutinesData: retrieveRoutinesData
};
