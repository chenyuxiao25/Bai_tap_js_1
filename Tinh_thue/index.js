function tinhThue() {
    // Lấy thông tin từ người dùng
    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
    var soNguoiPhuThuoc = parseInt(document.getElementById("soNguoiPhuThuoc").value);

    // Tính thu nhập chịu thuế
    var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;

    // Tính thuế
    var thue = 0;
    if (thuNhapChiuThue <= 5000000) {
        thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 10000000) {
        thue = 250000 + (thuNhapChiuThue - 5000000) * 0.1;
    } else if (thuNhapChiuThue <= 18000000) {
        thue = 750000 + (thuNhapChiuThue - 10000000) * 0.15;
    } else if (thuNhapChiuThue <= 32000000) {
        thue = 1950000 + (thuNhapChiuThue - 18000000) * 0.2;
    } else if (thuNhapChiuThue <= 52000000) {
        thue = 4750000 + (thuNhapChiuThue - 32000000) * 0.25;
    } else if (thuNhapChiuThue <= 80000000) {
        thue = 9750000 + (thuNhapChiuThue - 52000000) * 0.3;
    } else {
        thue = 18150000 + (thuNhapChiuThue - 80000000) * 0.35;
    }

    // Hiển thị kết quả
    var ketQua = "Thuế thu nhập cá nhân phải trả cho " + hoTen + " là: " + thue.toFixed(2) + " VND";
    document.getElementById("ketQua").innerHTML = ketQua;
}