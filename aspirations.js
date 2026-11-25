
// =========================================
// ANIMACIONES AL DESPLAZARSE
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// Si el usuario prefiere reducir las animaciones,
// mostramos directamente todos los elementos.

if (prefersReducedMotion) {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

} else {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

}
