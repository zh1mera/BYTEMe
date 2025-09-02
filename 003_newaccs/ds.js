function openModal(level) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").textContent = "Welcome " + level + "!";
  document.getElementById("modal-text").textContent = "Welcome to the " + level + " level.";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
