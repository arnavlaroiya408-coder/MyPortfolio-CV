// 1. DYNAMIC TEXT ROTATOR (Hero Section Typing Effect)
const words = ["Web developer", "App developer", "Problem Solver", "Lifelong Learner"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const targetElement = document.getElementById("text-rotator");

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Remove character
        targetElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add character
        targetElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Speed setting
    let typeSpeed = isDeleting ? 50 : 100;

    // If word is completely typed
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Pause at full word
        isDeleting = true;
    } 
    // If word is completely deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to next word
        typeSpeed = 300; // Small pause before next word
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect on window load
document.addEventListener("DOMContentLoaded", () => {
    if(targetElement) typeEffect();
});


// 2. CONTACT FORM SUBMISSION & SUCCESS POPUP MODAL
const contactForm = document.getElementById("contactForm");
const successModal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModalBtn");

if(contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Stop page from refreshing
        
        // Open the success popup
        successModal.style.display = "flex";
        
        // Reset form inputs
        contactForm.reset();
    });
}

if(closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
        successModal.style.display = "none";
    });
}

// Close modal if user clicks outside the box
window.addEventListener("click", function(e) {
    if (e.target === successModal) {
        successModal.style.display = "none";
    }
});


// 3. ACTIVE NAVBAR LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});