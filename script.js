document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Active section highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Enhanced glitch effect on header text hover
    const glitchText = document.querySelector('.header-text h1');
    glitchText.addEventListener('mouseenter', () => {
        glitchText.style.animation = 'glitch 250ms infinite';
    });
    glitchText.addEventListener('mouseleave', () => {
        glitchText.style.animation = 'glitch 500ms infinite';
    });

    // Project card interaction for mobile
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.querySelector('.project-info').classList.toggle('active');
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-right form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will respond shortly.');
        this.reset();
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.about-item, .skill-card, .project-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = window.pageYOffset > 500 ? 'block' : 'none';
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Parallax effect on profile image
    const profileImage = document.querySelector('.profile-image-container img');
    window.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            profileImage.style.transform = `translateY(${yAxis}px) translateX(${xAxis}px)`;
        }
    });
});