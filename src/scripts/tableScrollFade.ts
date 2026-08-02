export function initTableScrollFade(): void {
  const wrap = document.getElementById("table-scroll");
  const fadeLeft = document.getElementById("scroll-fade-left");
  const fadeRight = document.getElementById("scroll-fade-right");
  if (!wrap || !fadeLeft || !fadeRight) return;

  const update = () => {
    const maxScrollLeft = wrap.scrollWidth - wrap.clientWidth;
    const scrollable = maxScrollLeft > 2;
    const atStart = wrap.scrollLeft <= 2;
    const atEnd = wrap.scrollLeft >= maxScrollLeft - 2;

    fadeLeft.style.opacity = scrollable && !atStart ? "1" : "0";
    fadeRight.style.opacity = scrollable && !atEnd ? "1" : "0";
  };

  wrap.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
