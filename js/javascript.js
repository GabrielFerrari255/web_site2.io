// Função para alternar entre tema claro e escuro
const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');
}

// Função de validação de formulário
document.querySelector('form').addEventListener('submit', function (e) {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  if (!nome || !email) {
    e.preventDefault();
    alert('Por favor, preencha todos os campos!');
  }
});

// Carrossel de imagens (exemplo simples)
let currentIndex = 0;
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
const imgElement = document.getElementById('carrossel-img');

const changeImage = () => {
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
};

setInterval(changeImage, 3000); // Troca de imagem a cada 3 segundos

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});

// Botão de vídeo

function mostrarVideo() {
  var video = document.getElementById("meu-video");
  video.style.display = "block";
}
function ocultarVideo() {
  var video = document.getElementById("meu-video");
  video.style.display = "none";
}
function esconderBotaoplay() {
  var botao = document.getElementById("play");
  botao.style.display = "none";
}
function esconderBotaovoltarplay() {
  var botao = document.getElementById("voltar-play");
  botao.style.display = "none";
}
function aparecerBotaovoltar() {
  var botao = document.getElementById("voltar-play");
  botao.style.display = "block";
}

function aparecerBotaoplay() {
  var botao = document.getElementById("play");
  botao.style.display = "block";
}