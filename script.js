function makeResponsive() {
  const card = document.querySelector(".card");
  const title = card.querySelector("h1");
  const text = card.querySelector("p");

  const width = window.innerWidth;

  if (width <= 400) {
    card.style.width = "260px";
    card.style.padding = "15px";
    title.style.fontSize = "16px";
    text.style.fontSize = "13px";
  } else if (width <= 320) {
    card.style.width = "230px";
    title.style.fontSize = "15px";
    text.style.fontSize = "12px";
  } else {
    card.style.width = "300px";
    card.style.padding = "20px";
    title.style.fontSize = "18px";
    text.style.fontSize = "14px";
  }
}

// run on start
makeResponsive();

// run every time window resizes
window.addEventListener("resize", makeResponsive);
