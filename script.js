document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav .nav-links h2');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.textContent.toLowerCase();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
