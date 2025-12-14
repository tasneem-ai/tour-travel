const container = document.getElementById("container");

document.getElementById("signUp").addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

document.getElementById("signIn").addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function goHome() {
  event.preventDefault();
  window.location.href = "index.html"; // HOME PAGE
}
