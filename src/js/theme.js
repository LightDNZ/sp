let currentIndex = parseInt(localStorage.getItem("currentIndex"));

if (isNaN(currentIndex)) {
  currentIndex = 0;
}

const images = ["cover1.webp", "cover2.webp", "cover3.webp", "cover4.webp"];

const colorSets = [
  {
    "--text-color": "#c0caf5",
    "--hover-color": "#bb9af7",
    "--accent-color": "#7aa2f7",
    "--accent-color-2": "#f7768e",
    "--background-color": "#1a1b26",
  },
  {
    "--text-color": "#9fadc6",
    "--hover-color": "#9B5856",
    "--accent-color": "#28725A",
    "--accent-color-2": "#D2C7CB",
    "--background-color": "#15191d",
  },
  {
    "--text-color": "#c0caf5",
    "--hover-color": "#e0af68",
    "--accent-color": "#7aa2f7",
    "--accent-color-2": "#bb9af7",
    "--background-color": "#1a1b26",
  },
  {
    "--text-color": "#EAEFFD",
    "--hover-color": "#FDB6A7",
    "--accent-color": "#556BFF",
    "--accent-color-2": "#FA87A6",
    "--background-color": "#16191F",
  },
];

function preloadImages() {
  images.forEach((imgName) => {
    const img = new Image();
    img.src = "src/images/" + imgName;
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  localStorage.setItem("currentIndex", currentIndex);

  const imageElement = document.getElementById("carouselImage");
  imageElement.style.opacity = 0;

  updateColors();

  setTimeout(() => {
    imageElement.src = "src/images/" + images[currentIndex];
    imageElement.style.opacity = 1;
  }, 200);
}

function updateColors() {
  const colorSet = colorSets[currentIndex];

  if (!colorSet) return; // Proteção extra contra erros

  Object.entries(colorSet).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
}

// Aplicar tema inicial
updateColors();

// Definir imagem inicial
document.getElementById("carouselImage").src =
  "src/images/" + images[currentIndex];

// Animações ao carregar
window.onload = function () {
  document.getElementById("image").classList.add("loaded");
  document.getElementById("text").classList.add("loaded");
  document.documentElement.classList.add("loaded");

  preloadImages();
};
