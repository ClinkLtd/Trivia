if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Trivia/sw.js', { scope: '/Trivia/' })})}