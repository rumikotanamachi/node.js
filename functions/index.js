const functions = require('firebase-functions');

// ローカル
// http://localhost:5000/node-js-20200601/us-central1/helloWorld

// デプロイ
// https://console.firebase.google.com/project/node-js-20200601/overview

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
