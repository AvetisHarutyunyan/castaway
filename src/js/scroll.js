window.addEventListener("scroll", () => {
    const topNav = document.querySelector(".header__section");
    topNav.classList.toggle("nav-changed", window.scrollY > 30);

    const toUpBtn = document.querySelector(".toUp_btn");
    toUpBtn.classList.toggle("show-btn", window.scrollY > 30);
});