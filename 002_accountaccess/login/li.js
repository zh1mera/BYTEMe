function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈"; // hide icon
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁️"; // show icon
    }
}