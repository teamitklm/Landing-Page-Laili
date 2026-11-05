const {chromium}=require('playwright');
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage();await page.goto('file:///C:/Users/Lenovo/Documents/Codex/2026-10-29/fig-2/outputs/laili-landing-page/index.html');for(const width of [320,390,430]){await page.setViewportSize({width,height:844});await page.waitForTimeout(100);console.log(await page.evaluate(()=>{const r=document.querySelector('[data-node-id="1:7"]').getBoundingClientRect(),h=document.querySelector('#home').getBoundingClientRect();return {width:innerWidth,photoFullyVisible:r.left>=0&&r.right<=innerWidth&&r.bottom<=h.bottom,overflow:document.documentElement.scrollWidth>innerWidth}}));if(width===390)await page.locator('#home').screenshot({path:'work/mobile-hero-fit.png'});}await browser.close()})();
const setPageScale = () =>
  document.documentElement.style.setProperty(
    "--page-scale",
    window.innerWidth / 1440,
  );
window.addEventListener("resize", setPageScale);
setPageScale();

const home = document.querySelector('#home');
const heroArt = document.createElement('div');
heroArt.className = 'hero-art';
const heroScene = document.createElement('div');
heroScene.className = 'hero-art-scene';
['1:7', '1:27', '1:28'].forEach(id => {
  heroScene.append(home.querySelector(`[data-node-id="${id}"]`));
});
heroArt.append(heroScene);
home.append(heroArt);
new ResizeObserver(() => {
  heroArt.style.setProperty('--hero-scale', heroArt.clientWidth / 440);
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
