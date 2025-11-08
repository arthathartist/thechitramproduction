// Wait 2 seconds then show main content
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }, 2000);
});
