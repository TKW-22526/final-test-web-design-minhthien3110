/* =========================================================
   MỘC & CHỮ — script.js
   Dữ liệu sản phẩm dùng chung cho toàn bộ site + logic giỏ hàng,
   lọc / tìm kiếm / sắp xếp, trang chi tiết, form liên hệ.
   ========================================================= */

/* ---------------------------------------------------------
   1. DỮ LIỆU SẢN PHẨM (20 sản phẩm: 12 tranh + 8 sách)
   --------------------------------------------------------- */
const PRODUCTS = [
  {
    id: "T01", type: "tranh", category: "Tranh sơn mài",
    name: "Thiếu nữ bên hoa sen", artist: "Nguyễn Bình An",
    price: 4200000, img: "assets/tranh01.svg",
    desc: "Bức sơn mài khắc họa hình ảnh thiếu nữ áo dài đứng bên đầm sen, sử dụng kỹ thuật dát vàng truyền thống tạo chiều sâu ánh sáng đặc trưng của dòng tranh sơn mài Việt Nam.",
    size: "60 × 80 cm", material: "Sơn mài trên gỗ", year: "2023", rating: 4.9, stock: 3
  },
  {
    id: "T02", type: "tranh", category: "Tranh sơn dầu",
    name: "Vịnh Hạ Long lúc bình minh", artist: "Lê Thu Hà",
    price: 5600000, img: "assets/tranh02.svg",
    desc: "Phong cảnh vịnh Hạ Long được thể hiện bằng chất liệu sơn dầu với gam màu ấm của bình minh, nhấn mạnh những khối núi đá vôi nhấp nhô trên mặt biển.",
    size: "70 × 90 cm", material: "Sơn dầu trên toan", year: "2022", rating: 4.8, stock: 2
  },
  {
    id: "T03", type: "tranh", category: "Tranh sơn mài",
    name: "Chợ quê ngày Tết", artist: "Phạm Văn Cường",
    price: 3800000, img: "assets/tranh03.svg",
    desc: "Không khí chợ Tết rộn ràng được tái hiện qua từng lớp màu sơn mài, gợi nhớ ký ức tuổi thơ về những phiên chợ quê ngày giáp Tết.",
    size: "50 × 70 cm", material: "Sơn mài trên gỗ", year: "2021", rating: 4.7, stock: 5
  },
  {
    id: "T04", type: "tranh", category: "Tranh lụa",
    name: "Đầm sen mùa hạ", artist: "Đỗ Thanh Mai",
    price: 3200000, img: "assets/tranh04.svg",
    desc: "Tranh lụa mềm mại với sắc hồng của sen nở giữa nền lá xanh, sử dụng lối vẽ loang màu đặc trưng của kỹ thuật lụa truyền thống.",
    size: "45 × 65 cm", material: "Màu nước trên lụa", year: "2023", rating: 4.9, stock: 4
  },
  {
    id: "T05", type: "tranh", category: "Tranh sơn dầu",
    name: "Núi rừng Tây Bắc", artist: "Hoàng Minh Tuấn",
    price: 6100000, img: "assets/tranh05.svg",
    desc: "Khung cảnh ruộng bậc thang Tây Bắc mùa nước đổ, khắc họa qua từng nhát cọ dày dặn thể hiện chiều sâu của núi rừng.",
    size: "80 × 100 cm", material: "Sơn dầu trên toan", year: "2022", rating: 4.6, stock: 2
  },
  {
    id: "T06", type: "tranh", category: "Tranh sơn mài",
    name: "Cá chép hóa rồng", artist: "Vũ Đình Khoa",
    price: 4700000, img: "assets/tranh06.svg",
    desc: "Hình tượng cá chép vượt vũ môn được thể hiện bằng kỹ thuật cẩn trứng và dát vàng, mang ý nghĩa may mắn và thành công.",
    size: "60 × 90 cm", material: "Sơn mài trên gỗ", year: "2023", rating: 5.0, stock: 1
  },
  {
    id: "T07", type: "tranh", category: "Tranh màu nước",
    name: "Phố cổ Hội An", artist: "Trần Ngọc Diệp",
    price: 2900000, img: "assets/tranh07.svg",
    desc: "Góc phố cổ Hội An với những dãy đèn lồng và mái ngói rêu phong, được vẽ bằng màu nước trong trẻo, nhẹ nhàng.",
    size: "40 × 55 cm", material: "Màu nước trên giấy", year: "2024", rating: 4.7, stock: 6
  },
  {
    id: "T08", type: "tranh", category: "Tranh sơn mài",
    name: "Trăng rằm tháng Tám", artist: "Nguyễn Bình An",
    price: 4500000, img: "assets/tranh08.svg",
    desc: "Đêm trăng rằm với ánh vàng lấp lánh trên mặt hồ, sử dụng kỹ thuật rắc vàng tạo hiệu ứng lung linh đặc trưng của sơn mài.",
    size: "55 × 75 cm", material: "Sơn mài trên gỗ", year: "2021", rating: 4.8, stock: 3
  },
  {
    id: "T09", type: "tranh", category: "Tranh sơn dầu",
    name: "Đồng lúa chín", artist: "Lê Thu Hà",
    price: 3600000, img: "assets/tranh09.svg",
    desc: "Cánh đồng lúa chín vàng trải dài tới chân trời, gợi nhắc vẻ đẹp bình dị của làng quê Việt Nam vào mùa gặt.",
    size: "50 × 70 cm", material: "Sơn dầu trên toan", year: "2022", rating: 4.6, stock: 4
  },
  {
    id: "T10", type: "tranh", category: "Tranh lụa",
    name: "Thuyền và biển", artist: "Đỗ Thanh Mai",
    price: 3100000, img: "assets/tranh10.svg",
    desc: "Hình ảnh con thuyền nhỏ giữa biển khơi được vẽ bằng lối loang màu tinh tế trên lụa, gợi cảm giác bình yên.",
    size: "45 × 60 cm", material: "Màu nước trên lụa", year: "2023", rating: 4.5, stock: 5
  },
  {
    id: "T11", type: "tranh", category: "Tranh sơn mài",
    name: "Chùa Một Cột", artist: "Phạm Văn Cường",
    price: 5200000, img: "assets/tranh11.svg",
    desc: "Biểu tượng kiến trúc Hà Nội được tái hiện tinh xảo trên nền sơn mài đen huyền, điểm xuyết những đường nét dát vàng.",
    size: "60 × 85 cm", material: "Sơn mài trên gỗ", year: "2020", rating: 4.9, stock: 2
  },
  {
    id: "T12", type: "tranh", category: "Tranh sơn dầu",
    name: "Hoa mai ngày xuân", artist: "Hoàng Minh Tuấn",
    price: 2700000, img: "assets/tranh12.svg",
    desc: "Cành mai vàng bung nở báo hiệu mùa xuân về, được vẽ với những mảng màu tươi sáng, tràn đầy sức sống.",
    size: "40 × 60 cm", material: "Sơn dầu trên toan", year: "2024", rating: 4.7, stock: 7
  },
  {
    id: "S01", type: "sach", category: "Văn học thiếu nhi",
    name: "Dế Mèn phiêu lưu ký", artist: "Tô Hoài",
    price: 68000, img: "assets/sach01.svg",
    desc: "Hành trình phiêu lưu của chú Dế Mèn qua thế giới loài vật, tác phẩm kinh điển của văn học thiếu nhi Việt Nam.",
    size: "13 × 20 cm", material: "Bìa mềm, 216 trang", year: "2020 (tái bản)", rating: 4.9, stock: 20
  },
  {
    id: "S02", type: "sach", category: "Văn học cổ điển",
    name: "Truyện Kiều", artist: "Nguyễn Du",
    price: 95000, img: "assets/sach02.svg",
    desc: "Kiệt tác thơ Nôm bất hủ của đại thi hào Nguyễn Du, bản in có chú giải chi tiết dành cho độc giả phổ thông.",
    size: "14.5 × 20.5 cm", material: "Bìa cứng, 328 trang", year: "2021 (tái bản)", rating: 5.0, stock: 15
  },
  {
    id: "S03", type: "sach", category: "Văn học hiện thực",
    name: "Số đỏ", artist: "Vũ Trọng Phụng",
    price: 79000, img: "assets/sach03.svg",
    desc: "Tiểu thuyết trào phúng kinh điển phê phán xã hội thực dân nửa phong kiến qua nhân vật Xuân Tóc Đỏ.",
    size: "13 × 20 cm", material: "Bìa mềm, 260 trang", year: "2019 (tái bản)", rating: 4.8, stock: 18
  },
  {
    id: "S04", type: "sach", category: "Hồi ký - Nhật ký",
    name: "Nhật ký trong tù", artist: "Hồ Chí Minh",
    price: 55000, img: "assets/sach04.svg",
    desc: "Tập thơ chữ Hán được Chủ tịch Hồ Chí Minh viết trong thời gian bị giam giữ, thể hiện tinh thần lạc quan cách mạng.",
    size: "12 × 19 cm", material: "Bìa mềm, 148 trang", year: "2022 (tái bản)", rating: 4.9, stock: 22
  },
  {
    id: "S05", type: "sach", category: "Văn học thiếu nhi",
    name: "Đất rừng phương Nam", artist: "Đoàn Giỏi",
    price: 88000, img: "assets/sach05.svg",
    desc: "Câu chuyện phiêu lưu của cậu bé An giữa vùng đất rừng U Minh, tác phẩm gắn liền với tuổi thơ nhiều thế hệ.",
    size: "14 × 20 cm", material: "Bìa mềm, 296 trang", year: "2023 (tái bản)", rating: 4.8, stock: 16
  },
  {
    id: "S06", type: "sach", category: "Lịch sử",
    name: "Việt Nam sử lược", artist: "Trần Trọng Kim",
    price: 120000, img: "assets/sach06.svg",
    desc: "Bộ sử liệu súc tích trình bày toàn cảnh lịch sử Việt Nam từ thời lập quốc đến đầu thế kỷ 20.",
    size: "16 × 24 cm", material: "Bìa cứng, 412 trang", year: "2020 (tái bản)", rating: 4.9, stock: 10
  },
  {
    id: "S07", type: "sach", category: "Văn học hiện thực",
    name: "Tuổi thơ dữ dội", artist: "Phùng Quán",
    price: 145000, img: "assets/sach07.svg",
    desc: "Bộ tiểu thuyết nhiều tập kể về những thiếu niên trinh sát trong kháng chiến, tác phẩm được giải thưởng Nhà nước.",
    size: "14.5 × 20.5 cm", material: "Bìa mềm, 800 trang", year: "2018 (tái bản)", rating: 5.0, stock: 8
  },
  {
    id: "S08", type: "sach", category: "Văn học đương đại",
    name: "Cho tôi xin một vé đi tuổi thơ", artist: "Nguyễn Nhật Ánh",
    price: 72000, img: "assets/sach08.svg",
    desc: "Cuốn sách gợi lại ký ức tuổi thơ trong veo qua giọng văn dí dỏm, gần gũi của nhà văn Nguyễn Nhật Ánh.",
    size: "13 × 20.5 cm", material: "Bìa mềm, 208 trang", year: "2023 (tái bản)", rating: 4.9, stock: 25
  }
];

/* ---------------------------------------------------------
   2. TIỆN ÍCH DÙNG CHUNG
   --------------------------------------------------------- */
function formatVND(n) {
  return n.toLocaleString("vi-VN") + " đ";
}

// Đường dẫn ảnh/asset cần điều chỉnh tùy theo trang đang ở thư mục nào
function assetPath(p) {
  const onSubpage = window.location.pathname.includes("/html/");
  return onSubpage ? "../" + p : p;
}

function productLink(id) {
  const onSubpage = window.location.pathname.includes("/html/");
  return (onSubpage ? "chi-tiet.html" : "html/chi-tiet.html") + "?id=" + id;
}

function findProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

/* ---------------------------------------------------------
   3. GIỎ HÀNG (lưu trong bộ nhớ phiên làm việc)
   --------------------------------------------------------- */
const Cart = {
  items: {}, // { id: qty }

  add(id, qty = 1) {
    this.items[id] = (this.items[id] || 0) + qty;
    this.updateBadge();
    showToast(`Đã thêm "${findProduct(id).name}" vào giỏ hàng`);
  },
  totalCount() {
    return Object.values(this.items).reduce((a, b) => a + b, 0);
  },
  updateBadge() {
    document.querySelectorAll(".cart-count").forEach(el => {
      el.textContent = this.totalCount();
    });
  }
};

function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---------------------------------------------------------
   4. RENDER: THẺ SẢN PHẨM
   --------------------------------------------------------- */
function productCardHTML(p) {
  return `
    <article class="product-card" data-type="${p.type}" data-name="${p.name.toLowerCase()}">
      <div class="product-thumb">
        <span class="product-tag">${p.type === "tranh" ? "Tranh" : "Sách"}</span>
        <a href="${productLink(p.id)}">
          <img src="${assetPath(p.img)}" alt="${p.name}" loading="lazy">
        </a>
      </div>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-name"><a href="${productLink(p.id)}">${p.name}</a></h3>
        <span class="product-meta">${p.artist} · ${p.size}</span>
        <div class="product-foot">
          <span class="price">${formatVND(p.price)}</span>
          <button class="add-btn" title="Thêm vào giỏ" data-add="${p.id}">+</button>
        </div>
      </div>
    </article>`;
}

function renderGrid(container, products) {
  container.innerHTML = products.map(productCardHTML).join("");
  container.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => Cart.add(btn.dataset.add, 1));
  });
}

/* ---------------------------------------------------------
   5. TRANG CHỦ: sản phẩm nổi bật
   --------------------------------------------------------- */
function initHomeFeatured() {
  const el = document.querySelector("#featured-grid");
  if (!el) return;
  const featured = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 8);
  renderGrid(el, featured);
}

/* ---------------------------------------------------------
   6. TRANG SẢN PHẨM: lọc + tìm kiếm + sắp xếp
   --------------------------------------------------------- */
function initProductPage() {
  const grid = document.querySelector("#product-grid");
  if (!grid) return;

  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.querySelector("#search-input");
  const sortSelect = document.querySelector("#sort-select");
  const resultCount = document.querySelector("#result-count");
  const emptyState = document.querySelector("#empty-state");

  let currentFilter = "all";

  function apply() {
    let list = PRODUCTS.filter(p => currentFilter === "all" || p.type === currentFilter);

    const q = (searchInput?.value || "").trim().toLowerCase();
    if (q) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.artist.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    const sortVal = sortSelect?.value || "default";
    if (sortVal === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortVal === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortVal === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sortVal === "name") list.sort((a, b) => a.name.localeCompare(b.name, "vi"));

    renderGrid(grid, list);
    if (resultCount) resultCount.textContent = `${list.length} sản phẩm`;
    if (emptyState) emptyState.style.display = list.length === 0 ? "block" : "none";
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      apply();
    });
  });

  searchInput?.addEventListener("input", apply);
  sortSelect?.addEventListener("change", apply);

  // Hỗ trợ mở trang với query ?type=tranh hoặc ?type=sach
  const params = new URLSearchParams(window.location.search);
  const typeParam = params.get("type");
  if (typeParam && (typeParam === "tranh" || typeParam === "sach")) {
    currentFilter = typeParam;
    filterBtns.forEach(b => b.classList.toggle("active", b.dataset.filter === typeParam));
  }

  apply();
}

/* ---------------------------------------------------------
   7. TRANG CHI TIẾT SẢN PHẨM
   --------------------------------------------------------- */
function initDetailPage() {
  const root = document.querySelector("#detail-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || PRODUCTS[0].id;
  const p = findProduct(id) || PRODUCTS[0];

  document.title = `${p.name} — Mộc & Chữ`;

  root.querySelector("#detail-img").src = assetPath(p.img);
  root.querySelector("#detail-img").alt = p.name;
  root.querySelector("#detail-tag").textContent = p.type === "tranh" ? "Tranh" : "Sách";
  root.querySelector("#detail-cat").textContent = p.category;
  root.querySelector("#detail-name").textContent = p.name;
  root.querySelector("#detail-rating-val").textContent = p.rating.toFixed(1);
  root.querySelector("#detail-price").textContent = formatVND(p.price);
  root.querySelector("#detail-desc").textContent = p.desc;
  root.querySelector("#spec-artist").textContent = p.artist;
  root.querySelector("#spec-size").textContent = p.size;
  root.querySelector("#spec-material").textContent = p.material;
  root.querySelector("#spec-year").textContent = p.year;
  root.querySelector("#spec-stock").textContent = p.stock + " sản phẩm còn lại";
  root.querySelector("#breadcrumb-name").textContent = p.name;

  // Số lượng
  const qtyInput = root.querySelector("#qty-input");
  root.querySelector("#qty-minus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value || "1") - 1);
  });
  root.querySelector("#qty-plus").addEventListener("click", () => {
    qtyInput.value = Math.min(p.stock, parseInt(qtyInput.value || "1") + 1);
  });

  root.querySelector("#add-to-cart").addEventListener("click", () => {
    Cart.add(p.id, parseInt(qtyInput.value || "1"));
  });

  // Sản phẩm liên quan: cùng loại, khác id
  const relatedEl = document.querySelector("#related-grid");
  if (relatedEl) {
    const related = PRODUCTS.filter(x => x.type === p.type && x.id !== p.id).slice(0, 4);
    renderGrid(relatedEl, related);
  }
}

/* ---------------------------------------------------------
   8. FORM LIÊN HỆ
   --------------------------------------------------------- */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const note = document.querySelector("#form-note");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#cf-name").value.trim();
    const email = form.querySelector("#cf-email").value.trim();
    const msg = form.querySelector("#cf-message").value.trim();

    if (!name || !email || !msg) {
      note.textContent = "Vui lòng điền đầy đủ thông tin trước khi gửi.";
      note.classList.add("show");
      note.style.color = "#A8332A";
      return;
    }
    note.textContent = `Cảm ơn ${name}! Chúng tôi đã nhận được tin nhắn và sẽ phản hồi qua ${email} trong vòng 24 giờ.`;
    note.style.color = "";
    note.classList.add("show");
    form.reset();
  });
}

/* ---------------------------------------------------------
   9. NEWSLETTER (band cuối trang)
   --------------------------------------------------------- */
function initNewsletter() {
  const form = document.querySelector("#newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input");
    if (input.value.trim()) {
      showToast("Đăng ký nhận tin thành công! Cảm ơn bạn đã đồng hành cùng Mộc & Chữ.");
      form.reset();
    }
  });
}

/* ---------------------------------------------------------
   10. MENU DI ĐỘNG
   --------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-main");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

/* ---------------------------------------------------------
   11. KHỞI CHẠY
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  Cart.updateBadge();
  initMobileMenu();
  initHomeFeatured();
  initProductPage();
  initDetailPage();
  initContactForm();
  initNewsletter();
});
