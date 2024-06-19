import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

export const app = initializeApp(config)
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  const messaging = getMessaging(app)
  getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
  }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken)
    }
  })
}

// 토큰값 얻기

// // 포그라운드 메시지 수신
// onMessage(messaging, (payload) => {
//   console.log('Message received. ', payload)
//   // ...
// })
