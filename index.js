const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
const downloadBtn = document.getElementById("downloadBtn");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".photo").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("show");       // Add fade-in class
    modalImg.src = img.dataset.src;
    downloadBtn.href = img.dataset.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");      // Fade out
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});

