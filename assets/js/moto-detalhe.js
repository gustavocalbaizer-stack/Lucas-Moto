const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const container = document.getElementById("moto-detalhe");


let currentImageIndex = 0;
let currentImages = [];


// Procura a moto pelo ID
const moto = motorcyclesData.find(m => m.id == id);

if (!moto) {
  container.innerHTML = "<p>Moto não encontrada.</p>";
} else {

  // Fallback seguro para imagem principal
  const mainImage = moto.images?.[0] ?? "/assets/img/no-image.jpg";

  container.innerHTML = `
    <div class="moto-detalhe-card">

      <!-- GALERIA -->
      <div class="moto-galeria">

        <!-- MINIATURAS -->
        <div class="moto-thumbs">
          ${moto.images.map((img, index) => `
            <img 
              src="${img}" 
              class="moto-thumb ${index === 0 ? 'active' : ''}"
              onclick="changeMainImage('${img}', this)"
              alt="Miniatura ${index + 1}"
            >
          `).join("")}
        </div>

        <!-- IMAGEM PRINCIPAL -->
        <div class="moto-imagem">
          <img 
            id="main-moto-image" 
            src="${moto.images[0]}" 
            alt="${moto.brand} ${moto.model}"
            onclick="openLightbox()"
            />
        </div>

      </div>

      <!-- INFORMAÇÕES -->
      <div class="moto-info">

        ${moto.price ? `<span class="moto-preco">${moto.price}</span>` : ""}

        <h1>${moto.brand} ${moto.model} | ${moto.year}</h1>

        <div class="moto-specs">
          ${moto.fuel ? `<div>⛽ ${moto.fuel}</div>` : ""}
          ${moto.color ? `<div>🎨 ${moto.color}</div>` : ""}
          <div>🛣 ${moto.km} KM</div>
          ${moto.owner ? `<div>👤 ${moto.owner}</div>` : ""}
          ${moto.key ? `<div>🔑 ${moto.key}</div>` : ""}
        </div>

        <ul class="moto-beneficios">
          <li>✔ Fazemos financiamento</li>
          <li>✔ Consórcios contemplados</li>
          <li>✔ Pegamos sua moto na troca</li>
        </ul>

        <div class="moto-botoes">
          <button type="button" class="btn-secondary">
            Simular financiamento
          </button>

          <button 
            type="button"
            class="btn-primary" 
            onclick="openWhatsApp('${moto.brand} ${moto.model} ${moto.year}')"
          >
            Falar com vendedor agora
          </button>
        </div>

      </div>
    </div>
  `;
}

// Troca da imagem principal
function changeMainImage(src, thumb) {
  const mainImage = document.getElementById("main-moto-image");

  // animação de saída
  mainImage.classList.add("fade-out");

  setTimeout(() => {
    mainImage.src = src;

    // animação de entrada
    mainImage.classList.remove("fade-out");
    mainImage.classList.add("fade-in");

    setTimeout(() => {
      mainImage.classList.remove("fade-in");
    }, 300);
  }, 200);

  document.querySelectorAll(".moto-thumb").forEach(img => {
    img.classList.remove("active");
  });

  thumb.classList.add("active");
}

function openLightbox() {
  currentImages = moto.images;
  const mainImg = document.getElementById("main-moto-image").src;

  currentImageIndex = currentImages.indexOf(mainImg);
  if (currentImageIndex === -1) currentImageIndex = 0;

  const img = document.getElementById("lightbox-img");
  img.src = currentImages[currentImageIndex];
  img.classList.remove("zoomed");

  document.getElementById("lightbox").classList.add("show");
}


function closeLightbox(event) {
  if (event.target.id === "lightbox") {
    document.getElementById("lightbox").classList.remove("show");
  }
}

function nextImage(event) {
  event.stopPropagation();
  currentImageIndex =
    (currentImageIndex + 1) % currentImages.length;

  updateLightboxImage();
}

function prevImage(event) {
  event.stopPropagation();
  currentImageIndex =
    (currentImageIndex - 1 + currentImages.length) % currentImages.length;

  updateLightboxImage();
}

function updateLightboxImage() {
  const img = document.getElementById("lightbox-img");
  img.classList.remove("zoomed");
  img.src = currentImages[currentImageIndex];
}

const lightboxImg = document.getElementById("lightbox-img");

lightboxImg.addEventListener("click", (e) => {
  e.stopPropagation();
  lightboxImg.classList.toggle("zoomed");
});


function changeMainImage(src, thumb) {
  const mainImage = document.getElementById("main-moto-image");

  mainImage.classList.add("fade-out");

  setTimeout(() => {
    mainImage.src = src;

    mainImage.classList.remove("fade-out");
    mainImage.classList.add("fade-in");

    setTimeout(() => {
      mainImage.classList.remove("fade-in");
    }, 300);
  }, 200);

  document.querySelectorAll(".moto-thumb").forEach(img => {
    img.classList.remove("active");
  });

  thumb.classList.add("active");
}

let currentIndex = 0;

function autoSlide(images) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeMainImage(images[currentIndex], document.querySelectorAll(".moto-thumb")[currentIndex]);
  }, 4000);
}

// CHAME depois de montar o HTML
autoSlide(moto.images);



