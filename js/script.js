// ===== Menu mobile (mở/đóng) =====
const nutMenu = document.querySelector(".menu-toggle");
const menuNav = document.querySelector("nav");

if (nutMenu && menuNav) {
  nutMenu.addEventListener("click", () => {
    menuNav.classList.toggle("mo");
  });
}

// ===== Đánh dấu link đang chọn trên menu =====
const trangHienTai = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach((lienKet) => {
  if (lienKet.getAttribute("href") === trangHienTai) {
    lienKet.classList.add("active");
  }
});

// ===== Giỏ hàng đơn giản (lưu ở localStorage) =====
function laySoLuongGio() {
  const gio = JSON.parse(localStorage.getItem("gioHangTranh") || "[]");
  return gio.reduce((tong, sp) => tong + sp.soLuong, 0);
}

function capNhatSoGio() {
  const oSoGio = document.querySelector("#so-gio-hang");
  if (oSoGio) oSoGio.textContent = laySoLuongGio();
}

function themVaoGio(ten, gia, soLuong = 1) {
  const gio = JSON.parse(localStorage.getItem("gioHangTranh") || "[]");
  const daCo = gio.find((sp) => sp.ten === ten);
  if (daCo) {
    daCo.soLuong += soLuong;
  } else {
    gio.push({ ten, gia, soLuong });
  }
  localStorage.setItem("gioHangTranh", JSON.stringify(gio));
  capNhatSoGio();
}

document.querySelectorAll("[data-them-gio]").forEach((nut) => {
  nut.addEventListener("click", () => {
    const ten = nut.dataset.themGio;
    const gia = Number(nut.dataset.gia || 0);
    const oSoLuong = document.querySelector("#so-luong-mua");
    const soLuong = oSoLuong ? Number(oSoLuong.value) : 1;
    themVaoGio(ten, gia, soLuong);

    const chuGoc = nut.textContent;
    nut.textContent = "Đã thêm vào giỏ ✓";
    setTimeout(() => (nut.textContent = chuGoc), 1500);
  });
});

capNhatSoGio();

// ===== Bộ đếm số lượng (trang chi tiết sản phẩm) =====
const nutGiam = document.querySelector("#giam-so-luong");
const nutTang = document.querySelector("#tang-so-luong");
const oSoLuongMua = document.querySelector("#so-luong-mua");

if (nutGiam && nutTang && oSoLuongMua) {
  nutGiam.addEventListener("click", () => {
    const gt = Math.max(1, Number(oSoLuongMua.value) - 1);
    oSoLuongMua.value = gt;
  });
  nutTang.addEventListener("click", () => {
    oSoLuongMua.value = Number(oSoLuongMua.value) + 1;
  });
}

// ===== Bộ lọc sản phẩm (trang sản phẩm) =====
const nutLoc = document.querySelectorAll(".bo-loc button");
const theSanPham = document.querySelectorAll(".the-san-pham");

nutLoc.forEach((nut) => {
  nut.addEventListener("click", () => {
    nutLoc.forEach((n) => n.classList.remove("active"));
    nut.classList.add("active");

    const loai = nut.dataset.loc;
    theSanPham.forEach((the) => {
      if (loai === "tat-ca" || the.dataset.loai === loai) {
        the.style.display = "";
      } else {
        the.style.display = "none";
      }
    });
  });
});

// ===== Form liên hệ =====
const formLienHe = document.querySelector("#form-lien-he");

if (formLienHe) {
  formLienHe.addEventListener("submit", (e) => {
    e.preventDefault();
    const thongBao = document.querySelector("#thong-bao-form");
    const hoTen = document.querySelector("#ho-ten").value.trim();
    const email = document.querySelector("#email").value.trim();
    const noiDung = document.querySelector("#noi-dung").value.trim();

    const emailHopLe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!hoTen || !email || !noiDung) {
      thongBao.textContent = "Vui lòng điền đầy đủ thông tin.";
      thongBao.className = "thong-bao hien loi";
      return;
    }
    if (!emailHopLe) {
      thongBao.textContent = "Email không hợp lệ, vui lòng kiểm tra lại.";
      thongBao.className = "thong-bao hien loi";
      return;
    }

    thongBao.textContent = "Cảm ơn " + hoTen + "! Chúng tôi đã nhận được tin nhắn và sẽ liên hệ lại sớm.";
    thongBao.className = "thong-bao hien thanh-cong";
    formLienHe.reset();
  });
}

// ===== Nút lên đầu trang =====
const nutLenDau = document.querySelector("#len-dau-trang");

if (nutLenDau) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      nutLenDau.classList.add("hien");
    } else {
      nutLenDau.classList.remove("hien");
    }
  });

  nutLenDau.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
