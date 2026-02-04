const home = document.getElementById("home");
const portfolio = document.getElementById("portfolio");

document.getElementById("goPortfolio").onclick = () => {
  home.classList.remove("active");
  portfolio.classList.add("active");
};

let currentCategory = "Portraits";
let images = [];
let index = 0;

const viewer = document.getElementById("viewer");

function loadCategory(cat) {
  currentCategory = cat;
  images = GALLERY[cat] || [];
  index = 0;
  render();
}

function render() {
  if (!images.length) {
    viewer.src = "";
    return;
  }
  viewer.src = images[index];
}

document.querySelectorAll("#categories li").forEach(li => {
  li.onclick = () => loadCategory(li.dataset.cat);
});

document.getElementById("prev").onclick = () => {
  if (!images.length) return;
  index = (index - 1 + images.length) % images.length;
  render();
};

document.getElementById("next").onclick = () => {
  if (!images.length) return;
  index = (index + 1) % images.length;
  render();
};

loadCategory(currentCategory);