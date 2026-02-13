document.addEventListener("DOMContentLoaded", () => {

const home = document.getElementById("home");
const portfolio = document.getElementById("portfolio");

const goPortfolio = document.getElementById("goPortfolio");
const goHome = document.getElementById("goHome");

goPortfolio.addEventListener("click", () => {
home.classList.remove("active");
portfolio.classList.add("active");
});

goHome.addEventListener("click", () => {
portfolio.classList.remove("active");
home.classList.add("active");
});

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
if (!images.length) return;
viewer.src = images[index];
}

document.querySelectorAll("#categories li").forEach(li => {

li.addEventListener("click", () => {

document.querySelectorAll("#categories li")
.forEach(item => item.classList.remove("active"));

li.classList.add("active");

loadCategory(li.dataset.cat);
});
});

document.getElementById("prev").addEventListener("click", () => {
if (!images.length) return;
index = (index - 1 + images.length) % images.length;
render();
});

document.getElementById("next").addEventListener("click", () => {
if (!images.length) return;
index = (index + 1) % images.length;
render();
});

loadCategory(currentCategory);

document.querySelector('#categories li[data-cat="Portraits"]')
.classList.add("active");

});
