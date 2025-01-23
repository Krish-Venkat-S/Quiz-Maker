document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');
    const buttons = document.querySelectorAll('.button');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'scale(1)';
        });
    });
});
