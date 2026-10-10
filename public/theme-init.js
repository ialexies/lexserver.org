// Applies the saved or system theme before first paint. External file because the CSP blocks inline scripts.
(function () {
  var saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {
    // storage blocked: fall back to the system setting
  }
  var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (dark) document.documentElement.classList.add("dark");
})();
