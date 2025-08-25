// Mobile menu state
let isMobileMenuOpen = false;

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileMenu.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    if (isMobileMenuOpen && 
        !mobileMenu.contains(event.target) && 
        !mobileMenuButton.contains(event.target)) {
        toggleMobileMenu();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
});

// Gallery modal functions
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Contact functions
function openWhatsApp(number, unit) {
    const message = encodeURIComponent(`Olá! Gostaria de agendar uma consulta na ${unit}.`);
    window.open(`https://wa.me/${number.replace(/\D/g, '')}?text=${message}`, '_blank');
}

function openMaps(url) {
    window.open(url, '_blank');
}

function openInstagram(url) {
    window.open(url, '_blank');
}