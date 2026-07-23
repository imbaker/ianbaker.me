function getExpandDuration(el: HTMLElement): number {
  const value = getComputedStyle(el).transitionDuration; // e.g. "0.8s" or "800ms"
  const seconds = parseFloat(value) || 0;
  return value.includes('ms') ? seconds : seconds * 1000;
}

function chaseScroll(target: HTMLElement, duration: number): void {
  const start = performance.now();
  let cancelled = false;

  const cancelEvents = ['wheel', 'touchstart', 'keydown'] as const;
  const cancel = () => {
    cancelled = true;
    cancelEvents.forEach((evt) => window.removeEventListener(evt, cancel));
  };
  cancelEvents.forEach((evt) =>
    window.addEventListener(evt, cancel, { passive: true, once: true })
  );

  function step(now: number) {
    if (cancelled) return;
    target.scrollIntoView({ behavior: 'auto', block: 'start' });
    if (now - start < duration) {
      requestAnimationFrame(step);
    } else {
      cancel();
    }
  }

  requestAnimationFrame(step);
}

export function initSetlistToggles(): void {
  // One listener for the whole table, instead of one per row.
  document.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement)?.closest<HTMLButtonElement>('[data-setlist-toggle]');
    if (!btn) return;

    const index = btn.dataset.setlistToggle;
    const row = document.getElementById(`setlist-${index}`);
    if (!row) return;

    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));

    requestAnimationFrame(() => {
      if (isOpen) {
        row.style.maxHeight = '0';
      } else {
        row.style.maxHeight = `${row.scrollHeight}px`;
        chaseScroll(btn.closest('tr')!, getExpandDuration(row));
      }
    });

    btn.textContent = isOpen ? 'View setlist' : 'Hide setlist';
  });
}