import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL, deleteObject} from 'firebase/storage';
import {v4} from 'uuid';
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file){
const storageRef = ref(storage, v4());
await uploadBytes(storageRef, file).then(snapshot => {console.log(snapshot)})
const url = await getDownloadURL(storageRef)
return url
}

export async function deleteImageByUrl  (url) {
  try {
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
    console.log(`Deleted image: ${url}`);
  } catch (error) {
    console.error("Failed to delete image from Firebase:", error);
  }
}
