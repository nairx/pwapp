if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registered:', reg))
      .catch(err => console.error('Service Worker failed:', err));
  });
}


function requestNotificationPermission() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("PWA Notification", {
        body: "You have enabled notifications!",
        icon: "/icon-192.png"
      });
    } else {
      console.log("Permission denied");
    }
  });
}


requestNotificationPermission()