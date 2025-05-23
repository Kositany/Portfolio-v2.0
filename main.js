//mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active'); // Show menu
    document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Hide menu
    document.body.style.overflow = '';
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
        nav.classList.add('bg-gray-900');
        nav.classList.add('bg-opacity-90');
        nav.classList.add('backdrop-blur-sm');
    } else {
        nav.classList.remove('shadow-lg');
        nav.classList.remove('bg-gray-900');
        nav.classList.remove('bg-opacity-90');
        nav.classList.remove('backdrop-blur-sm');
    }
});

// Animate elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, observerOptions);

document.querySelectorAll('.bento-item, section').forEach(section => {
    observer.observe(section);
});

//JavaScript to handle WhatsApp redirect
    document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // WhatsApp number
    const phone = "254114054247"; //

    // Compose the message with line breaks
    const fullMessage = `Hello, my name is ${name}.\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // Encode for URL
    const encoded = encodeURIComponent(fullMessage);

    // Create WhatsApp link
    const url = `https://wa.me/${phone}?text=${encoded}`;

    // Redirect user to WhatsApp
    window.location.href = url;
  });
