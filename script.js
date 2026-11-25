// ===============================
// TARJETAS INTERACTIVAS
// ===============================

const cards = document.querySelectorAll(".trait-card, .hobby-card");

cards.forEach(card => {

    const button = card.querySelector(".card-trigger");
    const details = card.querySelector(".card-details");

    button.addEventListener("click", () => {

        const isOpen = card.classList.contains("open");

        // Cerramos las demás tarjetas de la misma cuadrícula
        const grid = card.parentElement;

        grid.querySelectorAll(".trait-card, .hobby-card").forEach(otherCard => {

            otherCard.classList.remove("open");

            const otherButton = otherCard.querySelector(".card-trigger");
            const otherDetails = otherCard.querySelector(".card-details");

            otherButton.setAttribute("aria-expanded", "false");
            otherDetails.hidden = true;

        });

        // Si la tarjeta estaba cerrada, la abrimos
        if (!isOpen) {

            card.classList.add("open");

            button.setAttribute("aria-expanded", "true");

            details.hidden = false;

        }

    });

});


/* =========================================
   1. TARJETAS DESPLEGABLES DE CURSOS
========================================= */

const courseCards = document.querySelectorAll(".course-card.expandable");

courseCards.forEach((card) => {

    const header = card.querySelector(".course-header");

    header.addEventListener("click", () => {

        const isAlreadyOpen = card.classList.contains("open");

        // Cerramos todas las tarjetas
        courseCards.forEach((otherCard) => {
            otherCard.classList.remove("open");

            otherCard
                .querySelector(".course-header")
                .setAttribute("aria-expanded", "false");
        });

        // Abrimos la seleccionada, si estaba cerrada
        if (!isAlreadyOpen) {
            card.classList.add("open");
            header.setAttribute("aria-expanded", "true");
        }

    });

});


/* =========================================
   2. CARRUSEL DE DIPLOMAS
========================================= */

// Información de los ocho diplomas

const diplomas = [
    {
        image: "assets/certifications/diplomas/diploma1.jpg",
        title: "Nombre del primer diploma",
        date: "Fecha de realización"
    },
    {
        image: "assets/certifications/diplomas/diploma2.jpg",
        title: "Nombre del segundo diploma",
        date: "Fecha de realización"
    },
    {
        image: "assets/certifications/diplomas/diploma3.jpg",
        title: "Nombre del tercer diploma",
        date: "Fecha de realización"
    },
    {
        image: "assets/certifications/diplomas/diploma4.jpg",
        title: "Nombre del cuarto diploma",
        date: "Fecha de realización"
    },
    {
        image: "assets/certifications/diplomas/diploma5.jpg",
        title: "Nombre del quinto diploma",
        date: "Fecha de realización"
    },
    {
        image: "assets/certifications/diplomas/diploma6.jpg",
        title: "Nombre del sexto diploma",
        date: "Fecha de realización"
    },
    {
        image: "assets/certifications/diplomas/diploma7.jpg",
        title: "Nombre del séptimo diploma",
        date: "Fecha de realización"
    },
    {
        image: "assets/certifications/diplomas/diploma8.jpg",
        title: "Nombre del octavo diploma",
        date: "Fecha de realización"
    }
];


// Elementos HTML del carrusel

const diplomaImage = document.getElementById("diplomaImage");
const diplomaTitle = document.getElementById("diplomaTitle");
const diplomaDate = document.getElementById("diplomaDate");
const diplomaCounter = document.getElementById("diplomaCounter");

const previousButton = document.getElementById("previousDiploma");
const nextButton = document.getElementById("nextDiploma");


// Posición inicial

let currentDiploma = 0;


// Función para mostrar el diploma seleccionado

function showDiploma(index) {

    const diploma = diplomas[index];

    diplomaImage.src = diploma.image;
    diplomaImage.alt = diploma.title;

    diplomaTitle.textContent = diploma.title;
    diplomaDate.textContent = diploma.date;

    diplomaCounter.textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(diplomas.length).padStart(2, "0")}`;
}


// Botón siguiente

nextButton.addEventListener("click", () => {

    currentDiploma++;

    if (currentDiploma >= diplomas.length) {
        currentDiploma = 0;
    }

    showDiploma(currentDiploma);

});


// Botón anterior

previousButton.addEventListener("click", () => {

    currentDiploma--;

    if (currentDiploma < 0) {
        currentDiploma = diplomas.length - 1;
    }

    showDiploma(currentDiploma);

});
