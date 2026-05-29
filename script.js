// BOTÃO TOPO
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  revelarCards();

});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

// ANIMAÇÃO DOS CARDS
const cards = document.querySelectorAll(".card");

function revelarCards(){

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if(cardTop < alturaTela - 100){
      card.classList.add("show");
    }

  });

}

revelarCards();
