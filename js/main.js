// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const themeToggle = document.querySelector('.theme-toggle');
    const scrollAnimElements = document.querySelectorAll('.scroll-animation');
    const contactForm = document.getElementById('contactForm');
    
    // Sticky navbar & active link on scroll
    window.addEventListener('scroll', function() {
        // Add box shadow to navbar when scrolled
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow)';
            navbar.style.padding = '0.7rem 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1rem 0';
        }
        
        // Update active link based on current section
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
        
        // Animate elements on scroll
        scrollAnimElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('active');
            }
        });
    });
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('nav-active');
        themeToggle.classList.toggle('theme-active');
    });
    
    // Close menu when clicking a nav link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('nav-active');
            themeToggle.classList.remove('theme-active');
        });
    });
    
    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it and show a success message
            console.log('Form data:', formObject);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Your message has been sent successfully!</p>
            `;
            
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
            
            // Reset form after 5 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.removeChild(successMessage);
            }, 5000);
        });
    }
    
    // Helper function to check if element is in viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Initialize scroll animations
    sections.forEach(section => {
        const elements = section.querySelectorAll('.project-card, .skill-item, .education-item, .certification-item, .contact-item, .contact-form');
        elements.forEach((element, index) => {
            element.classList.add('scroll-animation');
            element.style.transitionDelay = `${index * 0.1}s`;
        });
    });
});
