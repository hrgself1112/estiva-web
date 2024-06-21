

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
 apiKey:env.local.apiKey,
 authDomain:env.local.authDomain,
 projectId:env.local.projectId,
 storageBucket:env.local.storageBucket,
 messagingSenderId:env.local.messagingSenderId,
 appId:env.local.appId,
 measurementId:env.local.measurementId
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase Auth instance for use in your application
export const auth = getAuth(app);

export default app;