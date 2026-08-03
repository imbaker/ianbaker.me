(() => {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const syncState = (isDark) => {
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
  };

  // Reflect the theme already applied by the early-run script in
  // <head>, since aria-pressed can't be known at server-render time.
  syncState(document.documentElement.classList.contains("dark"));

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    syncState(isDark);
  });
})();
