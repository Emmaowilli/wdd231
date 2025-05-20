document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("show");
});
