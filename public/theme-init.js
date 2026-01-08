// public/theme-init.js
(function() {
  // Inizializza il tema dal localStorage
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();