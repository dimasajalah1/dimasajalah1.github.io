window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".menu-btn");
const navigasi = document.querySelector(".navigasi");
const navigasiItems = document.querySelectorAll(".navigasi a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigasi.classList.toggle("active");
});

navigasiItems.forEach((navigasiItem) => {
  navigasiItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigasi.classList.remove("active");
  });
});

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", ungkap);

function ungkap() {
  var ungkaps = document.querySelectorAll(".ungkap");

  for (var i = 0; i < ungkaps.length; i++) {
    var windowHeight = window.innerHeight;
    var ungkapTop = ungkaps[i].getBoundingClientRect().top;
    var ungkapPoint = 50;

    if (ungkapTop < windowHeight - ungkapPoint) {
      ungkaps[i].classList.add("active");
    }
  }
}
