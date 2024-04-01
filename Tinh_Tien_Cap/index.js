function tinhHoaDon() {
    // Lấy giá trị từ các ô input
    var maKhachHang = document.getElementById("maKhachHang").value;
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = 0;
    var soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);
    var tongTien = 0;

    // Nếu là khách hàng doanh nghiệp, lấy số kết nối
    if (loaiKhachHang === "DoanhNghiep") {
        soKetNoi = parseInt(document.getElementById("soKetNoi").value);
    }

    // Tính hóa đơn cho khách hàng nhà dân
    if (loaiKhachHang === "NhaDan") {
        tongTien = 4.5 + 20.5 + (7.5 * soKenhCaoCap);
    }

    // Tính hóa đơn cho khách hàng doanh nghiệp
    if (loaiKhachHang === "DoanhNghiep") {
        tongTien = 15 + 75; // Phí xử lý hóa đơn và phí dịch vụ cơ bản

        // Tính phí cho số kết nối vượt quá 10
        if (soKetNoi > 10) {
            tongTien += (soKetNoi - 10) * 5;
        }

        tongTien += 50 * soKenhCaoCap; // Phí thuê kênh cao cấp
    }

    // Hiển thị kết quả
    document.getElementById("tongTien").innerHTML = "Tổng tiền hóa đơn cho khách hàng " + loaiKhachHang + " có mã " + maKhachHang + " là: " + tongTien + "$";
}

// Hàm để ẩn hoặc hiển thị ô nhập số kết nối dựa trên loại khách hàng
function hienThiSoKetNoi() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoiInput = document.getElementById("soKetNoiInput");

    if (loaiKhachHang === "DoanhNghiep") {
        soKetNoiInput.style.display = "block";
    } else {
        soKetNoiInput.style.display = "none";
    }
}