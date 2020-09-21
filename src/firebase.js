import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;