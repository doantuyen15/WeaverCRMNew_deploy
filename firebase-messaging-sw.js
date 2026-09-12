importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBMUnwQemtDvmB1vQTIgvwqHJcBpzblyww",
  projectId: "weaver-crm-uat-cefb3",
  messagingSenderId: "121891049946",
  appId: "1:121891049946:web:9247b93ff9a3fe9a3db0e3"
});

const messaging = firebase.messaging();

console.log('[firebase-messaging-sw.js] Service Worker Messaging initialized');

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification?.title || 'CRM Notification';
  const notificationOptions = {
    body: payload.notification?.body || 'Bạn có thông báo mới',
    icon: '/logo/logo.png',
    data: payload.data // Pass along data for click handling
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Optional: Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification clicked:', event.notification.data);
  event.notification.close();

  // Define where to redirect the user
  const urlToOpen = '/'; 

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
