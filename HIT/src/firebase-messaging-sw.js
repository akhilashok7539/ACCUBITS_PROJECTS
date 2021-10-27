// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries

// const { environment } = require("./environments/environment.prod");

// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');

// importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

// firebase.initializeApp(
//   environment.firebase
// );

// firebase.initializeApp({
//   'messagingSenderId': '1007316768314'
// });
firebase.initializeApp({
    apiKey: "AIzaSyCGb7QQUFCdppb-EI2vif0VG4NmhPvREAE",
    authDomain: "hit-gambling-dev.firebaseapp.com",
    databaseURL: "https://hit-gambling-dev-default-rtdb.firebaseio.com",
    projectId: "hit-gambling-dev",
    storageBucket: "hit-gambling-dev.appspot.com",
    messagingSenderId: "370130405639",
    appId: "1:370130405639:web:149f1f789b3773bc8f1da2",
    measurementId: "G-41VRKD3GFN"
});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();