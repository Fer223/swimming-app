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

var firebaseRutinasRef = firebase.database().ref('rutinas');
var firebaseTiemposRef;
var firebaseDefaultRecordRef;

var retrieveRoutinesData = function () {
    return new Promise((resolve, reject) => {
        firebaseRutinasRef.on('value', (data) => {
            resolve(data.val());
        });
    });
};
var retrieveTimeRecordsData = function (userId) {
    firebaseTiemposRef = firebase.database().ref('usuarios/' + userId + '/tiempos');

    return new Promise((resolve, reject) => {
        firebaseTiemposRef.on('value', (data) => {
            resolve(data.val());
        });
    });
};
var pushNewRecord = function (timeRecord, userId) {
    firebaseTiemposRef = firebase.database().ref('usuarios/' + userId + '/tiempos');

    return new Promise((resolve, reject) => {
        firebaseTiemposRef.set(timeRecord)
    });
};
var pushDefaultRecord = function (userId) {
    firebaseDefaultRecordRef = firebase.database().ref('usuarios/');
    var defaultStructure = {};
    defaultStructure[userId] = {
        tiempos: ['']
    };

    return new Promise((resolve, reject) => {
        firebaseDefaultRecordRef.update(defaultStructure)
    });
}

module.exports = {
    retrieveRoutinesData: retrieveRoutinesData,
    retrieveTimeRecordsData: retrieveTimeRecordsData,
    pushNewRecord: pushNewRecord,
    pushDefaultRecord: pushDefaultRecord
};
