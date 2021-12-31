import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJrmtvE0b2ji1r8kOtaFLbW_4quqIp28A",
  authDomain: "grails-react-js.firebaseapp.com",
  projectId: "grails-react-js",
  storageBucket: "grails-react-js.appspot.com",
  messagingSenderId: "851508090154",
  appId: "1:851508090154:web:1a745625deb4b4c564ba53"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}