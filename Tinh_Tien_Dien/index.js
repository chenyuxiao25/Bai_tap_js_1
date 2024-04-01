function tinhTienDien() {
    // Lấy thông tin từ người dùng
    var ten = document.getElementById("ten").value;
    var soKW = parseFloat(document.getElementById("soKW").value);

    // Tính tiền điện
    var tienDien = 0;
    if (soKW <= 50) {
        tienDien = soKW * 500;
    } else if (soKW <= 100) {
        tienDien = 50 * 500 + (soKW - 50) * 6500;
    } else if (soKW <= 150) {
        tienDien = 50 * 500 + 50 * 6500 + (soKW - 100) * 850;
    } else {
        tienDien = 50 * 500 + 50 * 6500 + 50 * 850 + (soKW - 150) * 1100;
    }

    // Hiển thị kết quả
    var ketQua = "Tiền điện phải trả cho " + ten + " là: " + tienDien.toFixed(2) + " đồng";
    document.getElementById("ketQua").innerHTML = ketQua;
}