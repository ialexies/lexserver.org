// Small enhancements for the Indexwise landing page. Loaded as an external file because the CSP blocks inline scripts.
(function () {
  var frame = document.querySelector(".yt-frame");
  if (!frame) return;
  var btn = frame.querySelector(".yt-play");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + frame.getAttribute("data-video-id") + "?autoplay=1&rel=0&playsinline=1";
    f.title = frame.getAttribute("data-title") || "Video";
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    f.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    frame.replaceChildren(f);
  });
})();

(function () {
  var video = document.getElementById("demo");
  if (!video) return;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var saveData = navigator.connection && navigator.connection.saveData;

  // Respect reduced motion and data saver: no autoplay, show the poster with the browser's own controls.
  if (reduce || saveData) {
    video.removeAttribute("autoplay");
    video.removeAttribute("loop");
    video.pause();
    video.controls = true;
    video.preload = "none";
    return;
  }

  // Do not burn battery or data while the video is off screen.
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var p = video.play();
            if (p && p.catch)
              p.catch(function () {
                video.controls = true;
              });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 },
    ).observe(video);
  }

  // If autoplay is blocked, let people press play.
  var started = video.play && video.play();
  if (started && started.catch)
    started.catch(function () {
      video.controls = true;
    });
})();
