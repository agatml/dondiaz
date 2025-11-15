
const imagensCarrossel = document.querySelectorAll(".carousel img");
let slideAtual = 0;

document.getElementById("next").onclick = () => {
  imagensCarrossel[slideAtual].classList.remove("active");
  slideAtual = (slideAtual + 1) % imagensCarrossel.length;
  imagensCarrossel[slideAtual].classList.add("active");
};

document.getElementById("prev").onclick = () => {
  imagensCarrossel[slideAtual].classList.remove("active");
  slideAtual = (slideAtual - 1 + imagensCarrossel.length) % imagensCarrossel.length;
  imagensCarrossel[slideAtual].classList.add("active");
};

// Troca automática
setInterval(() => {
  imagensCarrossel[slideAtual].classList.remove("active");
  slideAtual = (slideAtual + 1) % imagensCarrossel.length;
  imagensCarrossel[slideAtual].classList.add("active");
}, 2000);



let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});



document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-saiba-mais');
    if (btn) {
      e.preventDefault();
      const card = btn.closest('.card');
      if (card) card.classList.toggle('flipped');
      return;
    }

    const back = e.target.closest('.card-back');
    if (back) {
      const card = back.closest('.card');
      if (card) card.classList.remove('flipped');
      return;
    }
  });
});



const grupos = document.querySelectorAll('.grupo');
let grupoAtual = 0;

document.querySelector('.next').addEventListener('click', () => {
  grupos[grupoAtual].classList.remove('ativo');
  grupoAtual = (grupoAtual + 1) % grupos.length;
  grupos[grupoAtual].classList.add('ativo');
});

document.querySelector('.prev').addEventListener('click', () => {
  grupos[grupoAtual].classList.remove('ativo');
  grupoAtual = (grupoAtual - 1 + grupos.length) % grupos.length;
  grupos[grupoAtual].classList.add('ativo');
});
