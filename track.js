function trackIP() {
  fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
      const ip = data.ip;
      const ua = navigator.userAgent;
      
      // Kirim data ke Apps Script (ganti YOUR_SCRIPT_ID)
      fetch(`https://script.google.com/macros/s/AKfycbwEjUViowX-2Wia2UBp_RzI6eF5XwFuj0ovNWnMxwzSiRYK8JKjWOsiKPbEPDz-X6ymeg/exec?ip=${ip}&ua=${encodeURIComponent(ua)}`, {
        redirect: 'follow',
        mode: 'no-cors'
      })
      .then(() => {
        window.location.href = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQjPdejqvFg4zR-nhOBS5sRFZwlh4MN7J97S4z1KrBSiSjNtbft2uF_j0HOxpX3UlFgfXIikOWctTC_/pubhtml?gid=0&single=true"; // Redirect setelah kirim data
      })
      .catch(err => console.error("Error:", err));
    });
}
