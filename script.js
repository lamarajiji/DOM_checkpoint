//declaration des letiables
let btnPlus = document.querySelectorAll(".btn-light");
let btnMoins = document.querySelectorAll(".btn-light1");
let qte = document.querySelectorAll(".qte");
let prixTotal = document.querySelectorAll(".prix-total");
let prixUnitaire = document.querySelectorAll(".prix-Unitaire");
let del = document.querySelectorAll(".btn-danger");
let parentElem = document.querySelectorAll(".card-group");
let childElem = document.querySelectorAll(".card");
let togelement = document.querySelectorAll("#heart");
let heart = document.querySelectorAll(".fa-heart");

//initialisation du prix total

for (let i = 0; i < prixUnitaire.length; i++) {
  for (let j = 0; j < prixUnitaire.length; j++)
    prixTotal[i].innerHTML =
      Number(prixTotal[i].innerHTML) +
      Number(prixUnitaire[j].innerHTML) * Number(qte[j].innerHTML);
}

//evenement incrementation

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    qte[i].innerHTML++;
    for (let j = 0; j < prixUnitaire.length; j++) {
      prixTotal[j].innerHTML =
        Number(prixUnitaire[i].innerHTML) + Number(prixTotal[j].innerHTML);
    }
  });
}

//evenement decrementation

for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener("click", () => {
    if (Number(qte[i].innerHTML) > 0) {
      qte[i].innerHTML--;
      for (let j = 0; j < prixUnitaire.length; j++) {
        prixTotal[j].innerHTML =
          Number(prixTotal[j].innerHTML) - Number(prixUnitaire[i].innerHTML);
      }
    }
  });
}

//effacer un node

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", () => {
    parentElem[0].removeChild(childElem[i]);
    for (let j = 0; j < del.length; j++) {
      prixTotal[j].innerHTML =
        Number(prixTotal[j].innerHTML) - Number(prixUnitaire[i].innerHTML);
    }
  });
}

//toggle

for (let i = 0; i < heart.length; i++) {
  {
    console.log("hello");
    heart[i].addEventListener("click", function () {
      heart[i].classList.toggle("red");
    });
  }
}
