// Przykładowy skrypt JavaScript do dodania animacji lub interakcji
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#f0e68c';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });
});
