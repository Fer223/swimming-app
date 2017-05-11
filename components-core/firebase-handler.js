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
const firebaseTiemposRef = firebase.database().ref('usuarios/0/tiempos');

var retrieveRoutinesData = function () {
    return new Promise((resolve, reject) => {
        firebaseRutinasRef.on('value', (data) => {
            resolve(data.val());
        });
    });
};

var retrieveTimeRecordsData = function () {
    return new Promise((resolve, reject) => {
        firebaseTiemposRef.on('value', (data) => {
            resolve(data.val());
        });
    });
};

var pushNewRecord = function (timeRecord) {
    return new Promise((resolve, reject) => {
        firebaseTiemposRef.set(timeRecord)
    });
};

module.exports = {
    retrieveRoutinesData: retrieveRoutinesData,
    retrieveTimeRecordsData: retrieveTimeRecordsData,
    pushNewRecord: pushNewRecord
};
