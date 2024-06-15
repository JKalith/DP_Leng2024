import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';
const firebaseConfig = {
  apiKey: "AIzaSyCTSt6cXmLmOg3RlQqa2SByWsW88baRoaE",
  authDomain: "activity-image-firebase.firebaseapp.com",
  projectId: "activity-image-firebase",
  storageBucket: "activity-image-firebase.appspot.com",
  messagingSenderId: "500002022633",
  appId: "1:500002022633:web:aca1cda4daa6cef028fc78"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export function uploadFile(file){
const storageRef = ref(storage, v4());
uploadBytes(storageRef, file).then(snapshot => {console.log(snapshot)})
}