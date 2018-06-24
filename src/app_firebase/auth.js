import firebase from 'firebase/app';
import 'firebase/auth';
import config from 'app_firebase/config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();




