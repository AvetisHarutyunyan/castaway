function sectionActive() {
    const navLists = document.querySelector(".nav-lists");
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((item) => {
        item.addEventListener("click", () => {
            navLists.querySelector(".link-active").classList.remove("link-active");

            item.classList.add("link-active");
        });
    });
}
sectionActive();

function menuBtn() {
    const burger = document.querySelector(".burger");
    const navside = document.querySelector(".navside");
    const closeNav = document.querySelector(".close__btn");

    burger.addEventListener("click", () => {
        if (!navside.classList.contains("nav-active")) {
            navside.classList.add("nav-active");
        } else {
            navside.classList.remove("nav-active");
            closeNav.classList.remove("nav-active");
        }

        document.addEventListener("mouseup", (e) => {
            if (e.target !== navside) {
                navside.classList.remove("nav-active");
            }
        });
    });
}
menuBtn();