/* === REQUIRES === */
require('./index.html');
require('firebase/app');
/* === IMPORTS === */
import * as firebase from 'firebase';
/* === GAME LOGIC === */
window.onload = () => {
    console.log('JS LODADED')
    const firebaseConfig = {};
    const settings = {};
    const gameContainer = document.getElementById('game-container');

    firebase.initializeApp(firebaseConfig);
}