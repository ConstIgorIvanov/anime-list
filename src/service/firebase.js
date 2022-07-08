import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  getDoc,
  collection,
  where,
  addDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAa7-tJX08roEJawlZGqHgnyuq1JpNrjrA',
  authDomain: 'animelist-adef2.firebaseapp.com',
  projectId: 'animelist-adef2',
  storageBucket: 'animelist-adef2.appspot.com',
  messagingSenderId: '234727497849',
  appId: '1:234727497849:web:bdb2d2a847278ea77b74a8',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const addItem = async (
  uid,
  base,
  mal_id,
  images,
  title_english,
  title_japanese,
  status,
  rating,
  score,
  synopsis,
  year,
  genres,
) => {
  try {
    await setDoc(doc(db, `${uid}`, `${title_english}`), {
      uid,
      categories: base,
      mal_id,
      images,
      title_english,
      title_japanese,
      status,
      rating,
      score,
      synopsis,
      year,
      genres,
    });
  } catch (e) {
    console.log(e);
  }
};

const getItemCategories = async (categories) => {
  const q = query(collection(db, 'anime'), where('categories', '==', categories));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
  });
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signInWithGoogle, logout, addItem, getItemCategories };
