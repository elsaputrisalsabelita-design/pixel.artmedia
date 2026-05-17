// Memeriksa status login saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const username = sessionStorage.getItem('username');

    if (isLoggedIn !== 'true') {
        alert('Akses ditolak! Anda harus login terlebih dahulu.');
        window.location.href = 'index.html'; // Tendang kembali ke halaman login jika belum login
    } else {
        // Jika ada elemen teks untuk menyapa user, ganti teksnya
        const welcomeText = document.getElementById('welcomeMessage');
        if (welcomeText) {
            welcomeText.innerText = 'Selamat Datang Kembali, ' + username + '!';
        }
    }
});

// Fungsi untuk tombol Logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.clear(); // Hapus semua data session login
    alert('Anda telah berhasil logout.');
    window.location.href = 'index.html';
});