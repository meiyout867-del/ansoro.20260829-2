const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');

if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });
}

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-show');
            }
        });
    }, {
        rootMargin: '0px 0px -20% 0px'
    });

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    const headings = document.querySelectorAll('.section h2');
    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                headingObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    headings.forEach((heading) => {
        headingObserver.observe(heading);
    });
}
