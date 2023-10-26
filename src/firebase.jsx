import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";


export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

export const addToWatchList = async (result, userUID) => {
  try {
    // Define the Firestore collection reference where you want to store the data (e.g., 'users/{userUID}/watchlist')
    const watchlistRef = collection(db, `users/${userUID}/watchlist`);

    // Add the selected movie data to the collection
    await addDoc(watchlistRef, {
      Title: result.Title,
      Year: result.Year,
      Type: result.Type,
      Poster: result.Poster
      // Add other properties you want to store
    });

    console.log('Added to WatchList');
  } catch (error) {
    console.error('Error adding to WatchList', error);
  }
};


export const getUserWatchlist = async (userUID) => {
  try {
    // Define the Firestore collection reference (e.g., 'users/{userUID}/watchlist')
    const watchlistRef = collection(db, `users/${userUID}/watchlist`);

    // Create a query to retrieve the documents in the collection
    const q = query(watchlistRef);

    // Get the documents
    const querySnapshot = await getDocs(q);

    // Convert the documents to an array of data
    const watchlist = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Document ID
      ...doc.data(), // Document data
    }));

    return watchlist;
  } catch (error) {
    console.error('Error fetching user watchlist', error);
    return [];
  }
};
