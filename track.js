function logIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            
            // Kirim IP ke FormSubmit
            fetch('https://formsubmit.co/ajax/EMAIL_ANDA@gmail.com', {
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
            
            // Tampilkan pesan tanpa redirect
            alert("IP Anda telah tercatat. Terima kasih!"); // ❌ Redirect tidak dipakai
        });
}
