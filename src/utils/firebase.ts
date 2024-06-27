import firebase from 'firebase/app'
import 'fireabase/messaging'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'goodsgoodsduck.firebaseapp.com',
  projectId: 'goodsgoodsduck',
  storageBucket: 'goodsgoodsduck.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

export async function getToken() {
  firebase.initializeApp(firebaseConfig)
  const messaging = firebase.messaging()
  const token = await messaging.getToken({
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_VAPID_KEY,
  })

  return token
}
