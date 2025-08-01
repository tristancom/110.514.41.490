function logIP() {
    // 1. Dapatkan IP pengunjung
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;

            // 2. Kirim data ke FormSubmit (gunakan /el/nivero)
            const formData = new FormData();
            formData.append('ip', ip);
            formData.append('userAgent', navigator.userAgent);
            formData.append('waktu', new Date().toLocaleString());

            fetch('https://formsubmit.co/el/nivero', {
                method: "POST",
                body: formData
            })
            .then(response => {
                if (!response.ok) throw new Error("Gagal mengirim data");
                return response.json();
            })
            .then(data => {
                console.log("Sukses:", data);
                // 3. Redirect setelah berhasil (opsional)
                window.location.href = "https://example.com/download";
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Terjadi error, silakan coba lagi!");
            });
        });
}
