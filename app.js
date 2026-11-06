// Local interactions require no build step or external services.
const setPageScale = () =>
  document.documentElement.style.setProperty(
    "--page-scale",
    window.innerWidth / 1440,
  );
window.addEventListener("resize", setPageScale);
setPageScale();

// Keep the complete hero photo and product artwork together on small screens.
const home = document.querySelector("#home");
const heroArt = document.createElement("div");
heroArt.className = "hero-art";
const heroScene = document.createElement("div");
heroScene.className = "hero-art-scene";
["1:7", "1:27", "1:28"].forEach((id) => {
  heroScene.append(home.querySelector(`[data-node-id="${id}"]`));
});
heroArt.append(heroScene);
home.append(heroArt);
new ResizeObserver(() => {
  heroArt.style.setProperty("--hero-scale", heroArt.clientWidth / 440);
}).observe(heroArt);
document.querySelectorAll(".art").forEach((art) => {
  const resize = () =>
    art.style.setProperty("--art-scale", art.clientWidth / 720);
  new ResizeObserver(resize).observe(art);
  resize();
});
document.querySelectorAll(".carousel-track").forEach((track) => {
  const section = track.parentElement;
  const cards = [...track.children];
  const status = section.querySelector(".carousel-status");
  const current = () => {
    const step =
      cards.length > 1
        ? cards[1].offsetLeft - cards[0].offsetLeft
        : cards[0].offsetWidth;
    return Math.round(track.scrollLeft / step);
  };
  section.querySelectorAll("[data-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Math.max(
        0,
        Math.min(
          cards.length - 1,
          current() + Number(button.dataset.direction),
        ),
      );
      track.scrollTo({
        left: cards[index].offsetLeft - cards[0].offsetLeft,
        behavior: "smooth",
      });
    });
  });
  track.addEventListener(
    "scroll",
    () => {
      status.textContent = `${Math.min(cards.length, current() + 1)} / ${cards.length}`;
    },
    { passive: true },
  );
});

const menuButton = document.querySelector(".mobile-menu-toggle");
const navigation = document.querySelector(".navigation");
const closeMenu = () => {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Buka menu");
};
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
