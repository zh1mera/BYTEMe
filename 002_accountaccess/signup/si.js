function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "🙈"; // change to hide
  } else {
    passwordInput.type = "password";
    toggleIcon.textContent = "👁️"; // change to show
  }
}
