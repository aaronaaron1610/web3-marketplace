import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA6Lq-syOimCc_1zve8jK9eHZ9NwhW5y-4',
  authDomain: 'web3-marketplace-d3614.firebaseapp.com',
  databaseURL: 'https://web3-marketplace-d3614-default-rtdb.firebaseio.com',
  projectId: 'web3-marketplace-d3614',
  storageBucket: 'web3-marketplace-d3614.appspot.com',
  messagingSenderId: '227825993506',
  appId: '1:227825993506:web:d8721bb944a6989ceb877b',
  measurementId: 'G-HL9GBLCXB2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('result ', result);

      localStorage.setItem('email', result.user.email);
      localStorage.setItem('name', result.user.displayName);
      localStorage.setItem('profilePic', result.user.photoURL);
    })
    .catch((error) => {
      console.log('error ', error);
    });
};
