import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDcSdMGRD4JXS7uAGAqKW2uob0k0ZqS_yw",
	authDomain: "first-project-483cb.firebaseapp.com",
	databaseURL: "https://first-project-483cb.firebaseio.com",
	projectId: "first-project-483cb",
	storageBucket: "first-project-483cb.appspot.com",
	messagingSenderId: "888036284899",
	appId: "1:888036284899:web:72ec0b0dccbaa68c35e8d6",
	measurementId: "G-84L8589HXR"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}
// Initialize Firebase
export const db = firebase.firestore();
export const auth = firebase.auth();
export const analytics = firebase.analytics();

