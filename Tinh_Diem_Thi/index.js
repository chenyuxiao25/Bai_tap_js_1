function kiemTraTrungTuyen() {
    // Lấy giá trị từ các ô input
    var diemChuan = parseFloat(document.getElementById("diemChuan").value);
    var diemMon1 = parseFloat(document.getElementById("diemMon1").value);
    var diemMon2 = parseFloat(document.getElementById("diemMon2").value);
    var diemMon3 = parseFloat(document.getElementById("diemMon3").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = parseInt(document.getElementById("doiTuong").value);

    // Kiểm tra điểm môn thi có bằng 0 không
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        alert("Rất tiếc! Bạn không trúng tuyển vì có môn thi điểm 0.");
        return;
    }

    // Tính tổng điểm và điểm ưu tiên
    var tongDiem = diemMon1 + diemMon2 + diemMon3;
    var diemUuTien = 0;
    if (khuVuc !== "x") {
        diemUuTien += 1;
    }
    if (doiTuong !== 0) {
        diemUuTien += 2;
    }

    // Kiểm tra điều kiện trúng tuyển
    if (tongDiem + diemUuTien >= diemChuan) {
        alert("Chúc mừng! Bạn đã trúng tuyển. Tổng điểm đạt được: " + (tongDiem + diemUuTien));
    } else {
        alert("Rất tiếc! Bạn không trúng tuyển.");
    }
}
