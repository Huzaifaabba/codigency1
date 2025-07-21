document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a, .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Keyboard navigation for menu
        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });
    }

    // Sticky header background on scroll
    const header = document.querySelector('.sticky-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const service = document.getElementById('service')?.value;
            
            if (name && email && service) {
                alert(`Thank you, ${name}! Your message about ${service} has been received. We'll contact you at ${email} shortly.`);
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Portfolio filtering (only if elements exist)
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = [
            // Your portfolio items array...
        ];

        // ... rest of portfolio filtering code
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking on links (for mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});


// Add pulse animation on page load
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        // Add pulse class initially
        whatsappBtn.classList.add('pulse');
        
        // Remove pulse after 5 seconds
        setTimeout(() => {
            whatsappBtn.classList.remove('pulse');
        }, 5000);
        
        // Add pulse when hovered
        whatsappBtn.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });
        
        whatsappBtn.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
        });
    }
});

// Optional: Hide on scroll
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.whatsapp-btn');
  btn.style.bottom = (window.scrollY > 50) ? '-70px' : '30px';
});


// Position Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const positionCards = document.querySelectorAll('.position-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter positions
            positionCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('main-nav');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if(navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-btn, .whatsapp-btn').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});