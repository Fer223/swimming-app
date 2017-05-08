import * as firebase from 'firebase';

const firebaseConfig = {
    databaseURL: 'https://tp-aplicacion.firebaseio.com/'
};
const myFirebaseRef = firebase.initializeApp(firebaseConfig).database().ref();

var retrieveRoutinesData = function () {
    return new Promise((resolve, reject) => {
        myFirebaseRef.on('value', (data) => {
            resolve(data.val());
        });
    });
}

module.exports = {
    retrieveRoutinesData: retrieveRoutinesData
};
