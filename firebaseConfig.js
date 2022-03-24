import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyBoG_-obCeQoahY9x-QhQyJUOhe1JNE_Y0",
    authDomain: "sparta-myhoneytip-angar2.firebaseapp.com",
    projectId: "sparta-myhoneytip-angar2",
    storageBucket: "sparta-myhoneytip-angar2.appspot.com",
    messagingSenderId: "824310174866",
    appId: "1:824310174866:web:d43ed43d04872a4955c24b",
    measurementId: "G-Z7VD7K4SD7"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()