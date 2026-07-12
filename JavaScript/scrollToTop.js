const scroll = document.getElementById("scroll");

scroll.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});