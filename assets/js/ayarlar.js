const ayarlarBtn = document.getElementById("ayarlar-btn");
const favorilerBtn = document.getElementById("favoriler-btn");
const ayarlarSection = document.getElementById("ayarlar-section");
const favorilerSection = document.getElementById("favoriler-section");

ayarlarBtn.addEventListener("click", () => {
  ayarlarSection.style.display = "block";
  favorilerSection.style.display = "none";
});

favorilerBtn.addEventListener("click", () => {
  ayarlarSection.style.display = "none";
  favorilerSection.style.display = "block";
});
