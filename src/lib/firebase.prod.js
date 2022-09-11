import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
//import { seedDatabase } from "../seed";
// seed the database

// config

const config = {
  apiKey: "AIzaSyBVOEyuWK8FRcxheMdKWrCd8tb-ANCRcwc",
  authDomain: "netflix-48f31.firebaseapp.com",
  projectId: "netflix-48f31",
  storageBucket: "netflix-48f31.appspot.com",
  messagingSenderId: "947602066596",
  appId: "1:947602066596:web:d707acef0113cb88e7aa31",
};
const firebase = Firebase.initializeApp(config);

// only run this one time, otherwise there will have duplicate date
//seedDatabase(firebase);

export { firebase };
