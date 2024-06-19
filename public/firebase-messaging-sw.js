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
  apiKey: 'AIzaSyBDT4F5w2l2cOIjSMusDoPYpTPmcii5fNk',
  authDomain: 'goodsgoodsduck.firebaseapp.com',
  projectId: 'goodsgoodsduck',
  storageBucket: 'goodsgoodsduck.appspot.com',
  messagingSenderId: '749015931101',
  appId: '1:749015931101:web:44bbf9cb5fc1942f262334',
  measurementId: 'G-PBZYECTKN4',
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
