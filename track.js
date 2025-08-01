function trackIP() {
  fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
      // Kirim data ke Google Apps Script
      fetch(`https://script.google.com/macros/s/AKfycbxfW9GSweTyvFiMtvM4mC8rAlD2Je6xPO7XGpOo_88Hz-pP-cjudu9W5fjqysHjs2EU9g/exec?ip=${data.ip}&ua=${encodeURIComponent(navigator.userAgent)}`);
      
      // Redirect pengunjung (opsional)
      window.location.href = "https://example.com/download";
    });
}
