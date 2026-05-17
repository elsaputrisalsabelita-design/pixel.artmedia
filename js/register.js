document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput && passwordInput) {
        alert('Pendaftaran Berhasil untuk pengguna: ' + usernameInput + '. Silakan lakukan login.');
        window.location.href = 'index.html'; // Kembali ke halaman login utama
    } else {
        alert('Mohon isi semua field yang tersedia.');
    }
});