//Khai báo mảng
var listNumber = [];

//Nhập số vào mảng
document.getElementById("btnAdd").onclick = function () {
  listNumber.push(document.querySelector("#number").value * 1);
};

//Thực hiện các bài tập nhỏ
document.querySelector("#btnThucHien").addEventListener("click", function () {
  var radioBtns = document.querySelectorAll("input[name='optradio']");
  var output = "";
  var i = 0;
  for (; i < radioBtns.length; i++) {
    if (radioBtns[i].checked && i === 0) {
      output += "Tổng các số dương: " + tinhTongSoDuong(listNumber);
      break;
    }
    if (radioBtns[i].checked && i === 1) {
      output += "Có " + demSoDuong(listNumber) + " số dương";
      break;
    }
    if (radioBtns[i].checked && i === 2) {
      output += "Số nhỏ nhất trong mảng là " + timSoNhoNhat(listNumber);
      break;
    }
    if (radioBtns[i].checked && i === 3) {
      output +=
        "Số dương nhỏ nhất trong mảng là " + timSoDuongNhoNhat(listNumber);
      break;
    }
    if (radioBtns[i].checked && i === 4) {
      if (timSoChanCuoiCung(listNumber) === -1) {
        output += "Không có số chẵn nào - (-1)";
      } else {
        output +=
          "Số chẵn cuối cùng trong mảng là " + timSoChanCuoiCung(listNumber);
        break;
      }
    }
    //i===5 làm sau

    if (radioBtns[i].checked && i === 6) {
      output +=
        "Mảng theo thứ tự tăng dần: " +
        xuatMangThanhChuoi(sapXepTangDan(listNumber));
      break;
    }

    if (radioBtns[i].checked && i === 7) {
      if (timSoNguyenToDauTien(listNumber) === -1) {
        output += "Không có số nguyên tố nào trong mảng (-1)";
      } else {
        output +=
          "Số nguyên tố đầu tiên trong mảng là: " +
          timSoNguyenToDauTien(listNumber);
        break;
      }
    }

    if (radioBtns[i].checked && i === 8) {
      output += "Số số nguyên trong mảng là: " + demSoNguyen(listNumber);
      break;
    }

    if (radioBtns[i].checked && i === 9) {
      var countSoAm = soSoAm(listNumber);
      var countSoDuong = soSoDuong(listNumber);
      if (countSoAm > countSoDuong) {
        output +=
          "Số số âm (" +
          countSoAm +
          ") nhiều hơn số số dương (" +
          countSoDuong +
          ")";
      } else if (countSoDuong > countSoAm) {
        output +=
          "Số số dương (" +
          countSoDuong +
          ") nhiều hơn số số âm (" +
          countSoAm +
          ")";
      } else {
        "Số số dương (" + countSoDuong + ") bằng số số âm (" + countSoAm + ")";
      }
      break;
    }
  }
  document.getElementById("display").innerHTML = output;
});

//Tính tổng các số dương
function tinhTongSoDuong(list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i] > 0) {
      sum += list[i];
    }
  }
  return sum;
}
//Đếm số dương
function demSoDuong(list) {
  var count = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i] > 0) {
      count++;
    }
  }
  return count;
}
//Tìm số nhỏ nhất
function timSoNhoNhat(list) {
  var min = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return min;
}
//Tìm số dương nhỏ nhất
function timSoDuongNhoNhat(list) {
  var min = 0;
  var i = 0;
  for (; i < list.length; i++) {
    if (list[i] > 0) {
      min = list[i];
      break;
    }
  }
  if (min === 0) {
    return "Không có";
  }
  i++;
  for (; i < list.length; i++) {
    if (list[i] > 0 && list[i] < min) {
      min = list[i];
    }
  }
  return min;
}
//Tìm số chẵn cuối cùng trong mảng. Nếu k có trả về -1
function timSoChanCuoiCung(list) {
  var chuoiChan = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      chuoiChan.push(list[i]);
    }
  }

  var lengthChuoiChan = chuoiChan.length;
  if (lengthChuoiChan === 0) {
    return -1;
  } else {
    return chuoiChan[lengthChuoiChan - 1];
  }
}
//Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
//Làm sau

//Sắp xếp mảng theo thứ tự tăng dần.
function sapXepTangDan(listOrigin) {
  var list = listOrigin;
  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        var temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}
function xuatMangThanhChuoi(list) {
  var output = "";
  for (var i = 0; i < list.length; i++) {
    output += list[i] + " ";
  }
  return output;
}

//Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
function kiemTraSoNguyenTo(x) {
  var isPrime = 1;
  if (x > 1) {
    for (var i = 2; i < x; i++) {
      if (x % i === 0) {
        isPrime = 0;
        break;
      }
    }
  } else {
    isPrime = 0;
  }
  return isPrime;
}
function timSoNguyenToDauTien(list) {
  var firstPrime = -1;
  for (var i = 0; i < list.length; i++) {
    if (kiemTraSoNguyenTo(list[i]) === 1) {
      firstPrime = list[i];
      break;
    }
  }
  return firstPrime;
}

//tìm xem trong mảng có bao nhiêu số nguyên?
function demSoNguyen(list) {
  var countInt = 0;

  for (var i = 0; i < list.length; i++) {
    if (Number.isInteger(list[i])) {
      countInt++;
    }
  }

  return countInt;
}

//So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function soSoAm(list) {
  var count = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i] < 0) {
      count++;
    }
  }
  return count;
}
function soSoDuong(list) {
  var count = 0;
  for (var i = 0; i < list.length; i++) {
    if (list[i] > 0) {
      count++;
    }
  }
  return count;
}
