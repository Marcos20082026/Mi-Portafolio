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
        image: "assets/certificados/Integral-1.jpg",
        title: "Reconocimiento Integral",
        date: "Diciembre 2024"
    },
    {
        image: "assets/certificados/Integral-2.jpg",
        title: "Reconocimiento Integral",
        date: "10 de Diciembre de 2025"
    },
    {
        image: "assets/certificados/CREO-2.jpg",
        title: "Curso de Ciudadania-Creo FUSADES",
        date: "6 de junio de 2024"
    },
    {
        image: "assets/certificados/Contextos.jpg",
        title: "Soy Autor, Soy Autora, un viaje sincero",
        date: "29 de enero de 2026"
    },
    {
        image: "assets/certificados/MUN-1.jpg",
        title: "Modelo de Naciones Unidad- MUN ESEN ",
        date: "4 de diciembre de 2025"
    },
    {
        image: "assets/certificados/MUN-2.jpg",
        title: "MUN for EVERYONE",
        date: " Noviembre de 2025"
    },
    {
        image: "assets/certificados/TOEIC.jpg",
        title: "Certificación TOEIC",
        date: "10 de diciembre de 2025"
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