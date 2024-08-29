//const number = Array.from({ length: 76 }, (v, k) => k + 1);
const numberRand = Math.floor(Math.random() * 76) + 1;

document.addEventListener("DOMContentLoaded", () => {
  const tabellone = document.getElementById("tabellone");
  const estraiButton = document.getElementById("estrai");
  const numeriEstrattiDiv = document.getElementById("numeriEstratti");

  let numeriEstratti = new Set();

  for (let i = 1; i <= 76; i++) {
    const cella = document.createElement("div");
    cella.className = "cella";
    cella.textContent = i;
    tabellone.appendChild(cella);
  }

  estraiButton.addEventListener("click", () => {
    evidenziaCella(numberRand);
  });

  function evidenziaCella(numero) {
    const celle = document.querySelectorAll(".cella");
    celle.forEach((cella) => {
      if (cella.dataset.numero == numero) {
        cella.classList.add("evidenziata");
      }
    });
  }
});
