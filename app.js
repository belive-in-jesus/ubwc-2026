document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const wrap = document.querySelector(".nav-wrap");
  if (toggle) toggle.addEventListener("click", () => wrap.classList.toggle("open"));

  const countdown = document.getElementById("countdown");
  if (countdown) {
    const target = new Date("2026-10-11T18:00:00+02:00").getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor(diff / 3600000) % 24;
      const m = Math.floor(diff / 60000) % 60;
      const s = Math.floor(diff / 1000) % 60;
      countdown.querySelectorAll("strong").forEach((el, i) => el.textContent = [d,h,m,s][i].toString().padStart(2,"0"));
    };
    tick(); setInterval(tick, 1000);
  }
});