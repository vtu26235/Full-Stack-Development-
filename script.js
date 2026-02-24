// Select menu elements
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

// Listen for checkbox change
menuToggle.addEventListener("change", () => {
    if(menuToggle.checked) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});