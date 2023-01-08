import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    gsap.to(links, { color: "#252525" });
    if (document.activeElement === link) {
      gsap.to(link, { color: "#385ae0" });
    }

    const state = Flip.getState(activeNav);
    link.appendChild(activeNav as Node);
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      ease: "elastic.out(1,0.5)",
    });
  });
});

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const state = Flip.getState(cards);
    const isActive = card.classList.contains("active");
    if (!isActive) {
      card.classList.add("active");
      card.classList.remove("inactive");
    }

    cards.forEach((otherCard, otherIndex) => {
      if (index !== otherIndex) {
        otherCard.classList.add("inactive");
        otherCard.classList.remove("active");
      }
    });

    Flip.from(state, {
      duration: 1,
      absolute: true,
      ease: "expo.out",
    });
  });
});
