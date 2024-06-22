

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
 apiKey:process.env.NEXT_PUBLIC_APIKEY,
 authDomain:process.env.NEXT_PUBLIC_AUTHDOMAIN,
 projectId:process.env.NEXT_PUBLIC_PROJECTID,
 storageBucket:process.env.NEXT_PUBLIC_STORAGEBUCKET,
 messagingSenderId:process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
 appId:process.env.NEXT_PUBLIC_APPID,
 measurementId:process.env.NEXT_PUBLIC_MEASUREMENTID
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase Auth instance for use in your application
export const auth = getAuth(app);

export default app;