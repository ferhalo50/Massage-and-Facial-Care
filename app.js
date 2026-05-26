/* =========================
   SCROLL ANIMATIONS
========================= */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");

const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});

/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");
    }

});

/* =========================
   LANGUAGE SYSTEM
========================= */

const languageToggle =
document.getElementById("language-toggle");

let currentLanguage =
localStorage.getItem("language") || "en";

function updateLanguage(){

    /* TEXTS */

    document
    .querySelectorAll("[data-en]")
    .forEach((element) => {

        element.textContent =
        element.getAttribute(
            `data-${currentLanguage}`
        );

    });

    /* PLACEHOLDERS */

    document
    .querySelectorAll("[data-en-placeholder]")
    .forEach((element) => {

        element.placeholder =
        element.getAttribute(
            `data-${currentLanguage}-placeholder`
        );

    });

    /* BUTTON */

    languageToggle.textContent =
    currentLanguage === "en"
    ? "ES"
    : "EN";
}

updateLanguage();

languageToggle.addEventListener("click", () => {

    currentLanguage =
    currentLanguage === "en"
    ? "es"
    : "en";

    /* READ MORE BUTTONS */

document
.querySelectorAll(".read-more-btn")
.forEach((button) => {

    const reviewText =
    button.previousElementSibling;

    const isExpanded =
    reviewText.classList.contains("expanded");

    if(isExpanded){

        button.textContent =
        currentLanguage === "es"
        ? button.dataset.lessEs
        : button.dataset.lessEn;

    } else {

        button.textContent =
        currentLanguage === "es"
        ? button.dataset.readEs
        : button.dataset.readEn;
    }

});

    localStorage.setItem(
        "language",
        currentLanguage
    );

    updateLanguage();

});

/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    loader.classList.add("hidden-loader");

});

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
        section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === `#${current}`
        ){

            link.classList.add("active");
        }

    });

});

/* =========================
   GALLERY LIGHTBOX
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const galleryImages =
    document.querySelectorAll(".gallery-item img");

    const lightbox =
    document.getElementById("lightbox");

    const lightboxImg =
    document.getElementById("lightbox-img");

    const lightboxClose =
    document.getElementById("lightbox-close");

    galleryImages.forEach((img) => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");

            lightboxImg.src = img.src;

        });

    });

    lightboxClose.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

    lightbox.addEventListener("click", (e) => {

        if(e.target === lightbox){

            lightbox.classList.remove("active");
        }

    });

});

/* =========================
   READ MORE REVIEWS
========================= */

const readMoreButtons =
document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const reviewText =
        button.previousElementSibling;

        reviewText.classList.toggle("expanded");

        // Detect current language

        const activeLanguage =
        currentLanguage;

        if(
            reviewText.classList.contains("expanded")
        ){

            button.textContent =
            activeLanguage === "es"
            ? button.dataset.lessEs
            : button.dataset.lessEn;

        } else {

            button.textContent =
            activeLanguage === "es"
            ? button.dataset.readEs
            : button.dataset.readEn;
        }

    });

});