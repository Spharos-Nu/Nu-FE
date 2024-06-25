const version = '1.0.1' // 서비스 워커 버전

// Firebase App (the core Firebase SDK) is always required and must be listed first
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js')
// Firebase messaging
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js',
)

// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
})

// Retrieve Firebase Messaging object
const messaging = firebase.messaging()

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload,
  )

  // Extract notification details
  const { title, body, link } = payload.data

  console.log('Notification Data:', { title, body, link })

  // Show notification
  self.registration.showNotification(title, {
    body: body,
    icon: '/firebase-logo.png', // Adjust the icon path as needed
    data: { link: link }, // 전달할 링크를 data 속성에 포함
  })
})

// Handle notification click
self.addEventListener('notificationclick', function (event) {
  console.log('[firebase-messaging-sw.js] Notification click Received.')
  console.log('Notification Data:', event.notification.data)

  event.notification.close() // 알림 닫기

  // 링크로 이동
  if (event.notification.data && event.notification.data.link) {
    event.waitUntil(
      clients
        .matchAll({ type: 'window', includeUncontrolled: true })
        .then((windowClients) => {
          for (let client of windowClients) {
            if (
              client.url === event.notification.data.link &&
              'focus' in client
            ) {
              return client.focus()
            }
          }
          if (clients.openWindow) {
            return clients.openWindow(event.notification.data.link)
          }
        }),
    )
  }
})
