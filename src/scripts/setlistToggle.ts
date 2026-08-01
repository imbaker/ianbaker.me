function getExpandDuration(el: HTMLElement): number {
  const value = getComputedStyle(el).transitionDuration; // e.g. "0.8s" or "800ms"
  const seconds = parseFloat(value) || 0;
  return value.includes("ms") ? seconds : seconds * 1000;
}

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function smoothScrollTo(target: HTMLElement, duration: number): void {
  if (prefersReducedMotion()) {
    target.scrollIntoView({ block: "nearest" });
    return;
  }

  const scrollMarginTop =
    parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const startY = window.scrollY;
  const targetY =
    target.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
  const distance = targetY - startY;
  const start = performance.now();
  let cancelled = false;

  const cancelEvents = ["wheel", "touchstart", "keydown"] as const;
  const cancel = () => {
    cancelled = true;
    cancelEvents.forEach((evt) => window.removeEventListener(evt, cancel));
  };
  cancelEvents.forEach((evt) =>
    window.addEventListener(evt, cancel, { passive: true, once: true }),
  );

  function step(now: number) {
    if (cancelled) return;
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      cancel();
    }
  }

  requestAnimationFrame(step);
}

export function initSetlistToggles(): void {
  // One listener for the whole table, instead of one per row.
  document.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement)?.closest<HTMLButtonElement>(
      "[data-setlist-toggle]",
    );
    if (!btn) return;

    const index = btn.dataset.setlistToggle;
    const row = document.getElementById(`setlist-${index}`);
    if (!row) return;

    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));

    requestAnimationFrame(() => {
      if (isOpen) {
        row.style.maxHeight = "0";
      } else {
        row.style.maxHeight = `${row.scrollHeight}px`;
        smoothScrollTo(btn.closest("tr")!, getExpandDuration(row));
      }
    });

    btn.textContent = isOpen ? "View setlist" : "Hide setlist";
  });
}
