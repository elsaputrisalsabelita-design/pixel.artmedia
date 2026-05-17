document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
// JALUR PINTAS BUATAN
    if (usernameInput === 'heri' && passwordInput === '123') {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', 'heri');
        sessionStorage.setItem('role', 'user');
        alert('Login Berhasil! Selamat datang heri');
        window.location.href = 'welcome.html';
        return; // Menghentikan proses ke bawah agar langsung sukses
    }
    // Mengambil data dari REST API sesuai instruksi LKPD
    fetch('https://herisusanta.my.id/javalogin/api/')
    .then(response => response.json())
    .then(data => {
        // Mencari pengguna yang cocok di dalam database API
        const user = data.find(u => u.username === usernameInput && u.password === passwordInput);

        if (user) {
            // Jika login sukses, simpan status login dan role ke sessionStorage
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', user.username);
            sessionStorage.setItem('role', user.role);

            alert('Login Berhasil! Selamat datang ' + user.username);

            // Pengalihan halaman berdasarkan role (Admin atau User biasa)
            if (user.role === 'admin') {
                window.location.href = '../admin/index.html'; // Masuk ke dashboard admin
            } else {
                window.location.href = 'welcome.html'; // Masuk ke halaman welcome user
            }
        } else {
            alert('Username atau Password salah! Silakan coba lagi.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Gagal terhubung ke server login.');
    });
});