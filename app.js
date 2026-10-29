// Local interactions require no build step or external services.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({channel:'chrome',headless:true});const p=await b.newPage({viewport:{width:1440,height:1000}});await p.goto('file:///C:/Users/Lenovo/Documents/Codex/2026-10-29/fig-2/outputs/laili-landing-page/index.html');console.log(await p.locator('.layer-21,.layer-269').evaluateAll(es=>es.map(e=>({layer:e.dataset.nodeId,shadow:getComputedStyle(e).boxShadow}))));await p.locator('#home').screenshot({path:'work/logo-fixed.png'});await p.locator('#seminar').screenshot({path:'work/seminar-fixed.png'});await b.close()})();

const setPageScale = () =>
  document.documentElement.style.setProperty(
    "--page-scale",
    window.innerWidth / 1440,
  );
window.addEventListener("resize", setPageScale);
setPageScale();
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
  const current = () =>
    Math.round(track.scrollLeft / (cards[0].offsetWidth + 50));
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
