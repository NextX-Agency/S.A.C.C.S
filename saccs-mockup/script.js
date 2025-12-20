// ========================================
// NAVIGATION
// ========================================
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// HERO IMAGE SLIDER
// ========================================
const heroSlider = document.getElementById('heroSlider');
const heroSlides = heroSlider ? heroSlider.querySelectorAll('.hero-slide') : [];
let currentHeroSlide = 0;
let heroSliderInterval;

function showHeroSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroSlides[index].classList.add('active');
}

function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
}

function startHeroSlider() {
    if (heroSlides.length > 0) {
        heroSliderInterval = setInterval(nextHeroSlide, 3000); // Change every 3 seconds
    }
}

// Start hero slider when page loads
if (heroSlides.length > 0) {
    startHeroSlider();
}

// ========================================
// CLIENTS CAROUSEL (Infinite Scroll)
// ========================================
// The infinite scroll is handled purely by CSS animation
// Pause on hover is also handled by CSS
// No JavaScript needed for this carousel!

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay based on index for staggered animation
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    // For now, we'll just show the success message
    console.log('Form submitted:', formData);
    
    // Show success message
    contactForm.style.display = 'none';
    formSuccess.classList.add('show');
    
    // Reset form after 5 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.classList.remove('show');
    }, 5000);
});

// ========================================
// FORM INPUT ANIMATION
// ========================================
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    // Set placeholder-shown attribute correctly on load
    if (input.value) {
        input.setAttribute('placeholder-shown', 'false');
    }
    
    // Update on input
    input.addEventListener('input', function() {
        if (this.value) {
            this.setAttribute('placeholder-shown', 'false');
        } else {
            this.setAttribute('placeholder-shown', 'true');
        }
    });
});

// ========================================
// LAZY LOADING IMAGES
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// SCROLL TO TOP
// ========================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
let scrollTopButton = null;

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        if (!scrollTopButton) {
            scrollTopButton = document.createElement('button');
            scrollTopButton.innerHTML = '↑';
            scrollTopButton.className = 'scroll-top-btn';
            scrollTopButton.onclick = scrollToTop;
            document.body.appendChild(scrollTopButton);
            
            // Add styles
            const style = document.createElement('style');
            style.textContent = `
                .scroll-top-btn {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, var(--primary-color), var(--light-green));
                    color: white;
                    border: none;
                    border-radius: 50%;
                    font-size: 24px;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s ease;
                    z-index: 999;
                    animation: fadeInUp 0.3s ease;
                }
                .scroll-top-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
                }
            `;
            document.head.appendChild(style);
        }
    } else {
        if (scrollTopButton) {
            scrollTopButton.remove();
            scrollTopButton = null;
        }
    }
});

// ========================================
// PRELOADER (Optional)
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ========================================
// ACCESSIBILITY IMPROVEMENTS
// ========================================
// Keyboard navigation and accessibility features

// ========================================
// ANALYTICS & TRACKING (Optional)
// ========================================
// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log('Button clicked:', buttonText);
        // Here you could send this to Google Analytics or another tracking service
        // Example: gtag('event', 'button_click', { button_name: buttonText });
    });
});

// Track form submissions
contactForm.addEventListener('submit', () => {
    console.log('Form submission tracked');
    // Example: gtag('event', 'form_submission', { form_name: 'contact_form' });
});

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%cSACCS Website', 'color: #3ebe71; font-size: 24px; font-weight: bold;');
console.log('%cWij doen wat wij zeggen', 'color: #666; font-size: 14px; font-style: italic;');
console.log('Website developed with ❤️');
