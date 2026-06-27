const menu = document.getElementById("myLinks");
const menuIcon = document.getElementById("menu-icon");
const icon = menuIcon.querySelector("i");

// Toggle Mobile Menu
function toggleNav() {
    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}

// Smooth Scroll + Close Menu
const header = document.querySelector(".main-header");

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        const headerHeight = header.offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            15; // extra spacing

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        // Close mobile menu
        menu.classList.remove("show");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});