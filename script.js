1 // Add event listener to nav toggle button
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// Add event listener to project CTAs
document.querySelectorAll('.project-cta').forEach((cta) => {
    cta.addEventListener('click', () => {
        // Add animation to project details
        cta.parentNode.classList.add('active');
    });
});

// Add event listener to hero section CTAs
document.querySelector('.cta').addEventListener('click', () => {
    // Add animation to hero section
    document.querySelector('.hero-container').classList.add('active');
});

// Add scroll event listener to hero section
document.addEventListener('scroll', () => {
    const heroSection = document.querySelector('#home');
    if (window.scrollY > heroSection.offsetTop + heroSection.offsetHeight) {
        document.querySelector('.hero-overlay').classList.add('active');
    } else {
        document.querySelector('.hero-overlay').classList.remove('active');
    }
});

// Add animation to skills section
document.querySelectorAll('.skills li').forEach((li) => {
    li.addEventListener('mouseover', () => {
        li.classList.add('active');
    });
    li.addEventListener('mouseout', () => {
        li.classList.remove('active');
    });
});
// Add event listener to the CTA button
2 document.addEventListener("DOMContentLoaded", function() {
    3
    const ctaButton = document.querySelector(".cta");
    4 ctaButton.addEventListener("click", function() {
        5 // Add animation to the hero section
        6 document.querySelector("#home").classList.add("animate");
        7
    });
    8
});
// script.js

// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector("nav ul");
    navMenu.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const href = event.target.getAttribute("href");
            document.querySelector(href).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add event listener to hero section button
document.addEventListener("DOMContentLoaded", function() {
    const heroButton = document.querySelector("#hero button");
    heroButton.addEventListener("click", function() {
        document.querySelector("#features").scrollIntoView({ behavior: "smooth" });
    });
});

// Add event listener to features section
document.addEventListener("DOMContentLoaded", function() {
    const featuresSection = document.querySelector("#features");
    featuresSection.addEventListener("mouseover", function() {
        const features = document.querySelectorAll(".feature");
        features.forEach(function(feature) {
            feature.classList.add("animate");
        });
    });
    featuresSection.addEventListener("mouseout", function() {
        const features = document.querySelectorAll(".feature");
        features.forEach(function(feature) {
            feature.classList.remove("animate");
        });
    });
});

// Add event listener to portfolio section
document.addEventListener("DOMContentLoaded", function() {
    const portfolioSection = document.querySelector("#portfolio");
    portfolioSection.addEventListener("mouseover", function() {
        const portfolioItems = document.querySelectorAll(".portfolio-item");
        portfolioItems.forEach(function(portfolioItem) {
            portfolioItem.classList.add("animate");
        });
    });
    portfolioSection.addEventListener("mouseout", function() {
        const portfolioItems = document.querySelectorAll(".portfolio-item");
        portfolioItems.forEach(function(portfolioItem) {
            portfolioItem.classList.remove("animate");
        });
    });
});

// Add event listener to call to action section
document.addEventListener("DOMContentLoaded", function() {
    const ctaSection = document.querySelector("#cta");
    ctaSection.addEventListener("mouseover", function() {
        const ctaButton = document.querySelector("#cta button");
        ctaButton.classList.add("animate");
    });
    ctaSection.addEventListener("mouseout", function() {
        const ctaButton = document.querySelector("#cta button");
        ctaButton.classList.remove("animate");
    });
});
// Add event listener to nav toggle button
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
    // Add animation to nav toggle button
    document.querySelector('.nav-toggle').classList.toggle('animate');
});

// Add event listener to project CTAs
document.querySelectorAll('.project-cta').forEach((cta) => {
    cta.addEventListener('click', () => {
        // Add animation to project details
        cta.parentNode.classList.add('active');
        // Add animation to project image
        cta.parentNode.querySelector('img').classList.add('animate');
    });
});

// Add event listener to hero section CTAs
document.querySelector('.cta').addEventListener('click', () => {
    // Add animation to hero section
    document.querySelector('.hero-container').classList.add('active');
    // Add animation to hero section background
    document.querySelector('.hero-overlay').classList.add('animate');
});

// Add scroll event listener to hero section
document.addEventListener('scroll', () => {
    const heroSection = document.querySelector('#home');
    if (window.scrollY > heroSection.offsetTop + heroSection.offsetHeight) {
        document.querySelector('.hero-overlay').classList.add('active');
        // Add animation to hero section background
        document.querySelector('.hero-overlay').classList.add('animate');
    } else {
        document.querySelector('.hero-overlay').classList.remove('active');
        document.querySelector('.hero-overlay').classList.remove('animate');
    }
});

// Add animation to skills section
document.querySelectorAll('.skills li').forEach((li) => {
    li.addEventListener('mouseover', () => {
        li.classList.add('active');
        // Add animation to skill icon
        li.querySelector('i').classList.add('animate');
    });
    li.addEventListener('mouseout', () => {
        li.classList.remove('active');
        li.querySelector('i').classList.remove('animate');
    });
});

// Add responsive navigation
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li');
nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('active');
    }
});

// Add responsive hero section
const heroSection = document.querySelector('#home');
heroSection.addEventListener('resize', () => {
    const heroHeight = heroSection.offsetHeight;
    const heroWidth = heroSection.offsetWidth;
    document.querySelector('.hero-overlay').style.height = `${heroHeight}px`;
    document.querySelector('.hero-overlay').style.width = `${heroWidth}px`;
});

// Add responsive projects section
const projectsSection = document.querySelector('#projects');
projectsSection.addEventListener('resize', () => {
    const projectWidth = projectsSection.offsetWidth;
    document.querySelectorAll('.project').forEach((project) => {
        project.style.width = `${projectWidth / 2}px`;
    });
});
// Add event listener to hero section CTA
document.querySelector('.cta').addEventListener('click', () => {
    // Add animation to hero section
    document.querySelector('.hero-container').classList.add('active');
});

// Add event listener to projects section
document.querySelectorAll('.projects li').forEach((project) => {
    project.addEventListener('mouseover', () => {
        // Add animation to project image
        project.querySelector('img').classList.add('animate');
    });
    project.addEventListener('mouseout', () => {
        project.querySelector('img').classList.remove('animate');
    });
});

// Add scroll event listener to hero section
document.addEventListener('scroll', () => {
    const heroSection = document.querySelector('#home');
    if (window.scrollY > heroSection.offsetTop + heroSection.offsetHeight) {
        document.querySelector('.hero-overlay').classList.add('active');
    } else {
        document.querySelector('.hero-overlay').classList.remove('active');
    }
});

// Add animation to hero background
document.querySelector('.hero-background img').addEventListener('load', () => {
    document.querySelector('.hero-background').classList.add('animate');
});

// Add responsive hero section
const heroSection = document.querySelector('#home');
heroSection.addEventListener('resize', () => {
    const heroHeight = heroSection.offsetHeight;
    const heroWidth = heroSection.offsetWidth;
    document.querySelector('.hero-overlay').style.height = `${heroHeight}px`;
    document.querySelector('.hero-overlay').style.width = `${heroWidth}px`;
});

// Add responsive projects section
const projectsSection = document.querySelector('#projects');
projectsSection.addEventListener('resize', () => {
    const projectWidth = projectsSection.offsetWidth;
    document.querySelectorAll('.projects li').forEach((project) => {
        project.style.width = `${projectWidth / 3}px`;
    });
});
// Add event listener to video
document.getElementById('tableau-video').addEventListener('ended', () => {
    document.getElementById('tableau-video').play();
});
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById('contact').offsetTop,
        behavior: 'smooth'
    });
});
// Get the "Learn More" button
const learnMoreBtn = document.getElementById('learn-more-btn');

// Add an event listener to the button
learnMoreBtn.addEventListener('click', () => {
    // Get the "About" section
    const aboutSection = document.getElementById('about');

    // Scroll to the "About" section
    aboutSection.scrollIntoView({ behavior: 'mooth' });
}); // Add event listeners to the "Learn More" buttons
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

learnMoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Toggle the service card's description
        const serviceCard = btn.parentNode;
        const description = serviceCard.querySelector('p');
        description.classList.toggle('show');
    });
});


// Add event listener to the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const sectionId = event.target.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add animation to the skills section
const skillsSection = document.querySelector(".section.skills");
const skillsList = skillsSection.querySelector("ul");
const skillsItems = skillsList.querySelectorAll("li");

skillsItems.forEach(function(item, index) {
    item.style.animationDelay = `${index * 0.2}s`;
});

skillsSection.addEventListener("mouseenter", function() {
    skillsItems.forEach(function(item) {
        item.classList.add("animated");
    });
});

skillsSection.addEventListener("mouseleave", function() {
    skillsItems.forEach(function(item) {
        item.classList.remove("animated");
    });
});
const video = document.getElementById('tableau-video');
const fastForwardBtn = document.getElementById('fast-forward-btn');

fastForwardBtn.addEventListener('click', () => {
    video.playbackRate = 4; // Fast forward speed (2x, 3x, 4x, etc.)
});