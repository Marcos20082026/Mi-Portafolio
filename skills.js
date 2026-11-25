
// =========================================
// TARJETAS EXPANDIBLES
// =========================================

const expandableCards = document.querySelectorAll(".expandable-card");

expandableCards.forEach((card) => {

    card.addEventListener("click", () => {

        const parent = card.parentElement;

        // Comprobar si la tarjeta ya está abierta
        const isAlreadyExpanded = card.classList.contains("expanded");

        // Cerrar las demás tarjetas de la misma categoría
        parent.querySelectorAll(".expandable-card").forEach((otherCard) => {
            otherCard.classList.remove("expanded");
            otherCard.setAttribute("aria-expanded", "false");
        });

        // Si estaba cerrada, abrirla
        if (!isAlreadyExpanded) {
            card.classList.add("expanded");
            card.setAttribute("aria-expanded", "true");
        }

    });

});
