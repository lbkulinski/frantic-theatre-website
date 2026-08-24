// Frantic Theatre Co. — click-to-enlarge for production photo galleries.
// Any <img> inside .photo-pin-grid opens full-size in an overlay on click.

function initLightbox() {
  const grid = document.querySelector(".photo-pin-grid");
  if (!grid) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.hidden = true;
  overlay.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close">Close &times;</button>
    <img alt="">
  `;
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector("img");
  const closeBtn = overlay.querySelector(".lightbox-close");
  let lastFocused = null;

  function open(img) {
    lastFocused = document.activeElement;
    overlayImg.src = img.src;
    overlayImg.alt = img.alt || "";
    overlay.hidden = false;
    closeBtn.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function close() {
    overlay.hidden = true;
    overlayImg.src = "";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === "Escape") close();
  }

  grid.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (img) open(img);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  closeBtn.addEventListener("click", close);
}

document.addEventListener("DOMContentLoaded", initLightbox);
