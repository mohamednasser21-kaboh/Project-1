document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const nav = document.querySelector(".aboutsection1 .navright");

    openBtn.addEventListener("click", function () {
        nav.classList.add("active");
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        nav.classList.remove("active");
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
    });
});
