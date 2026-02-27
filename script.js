/**
 * WebHostPro Master Script
 * Senior Web Developer Version - Nikos Project
 */

document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const gateway = document.getElementById('gateway');
    const panel = document.querySelector('.glass-panel');

    // Έλεγχος αν ο χρήστης έχει ξαναμπεί στη συνεδρία (Session Storage)
    const hasVisited = sessionStorage.getItem('whp_active');
    const waitTime = hasVisited ? 300 : 3800;

    setTimeout(() => {
        // 1. Fade out το αρχικό Intro Screen
        if (introScreen) {
            introScreen.classList.add('fade-out');
            setTimeout(() => {
                introScreen.style.display = 'none';
            }, 1400);
        }

        // 2. Ενεργοποίηση της Κουρτίνας (Gateway)
        if (gateway) {
            gateway.classList.add('active');
            
            // 3. Εμφάνιση του Glass Panel (Τα κουμπιά)
            // Χρονισμένο στα 2600ms για να ταιριάζει με την αργή κίνηση
            if (panel) {
                setTimeout(() => {
                    panel.classList.add('show');
                }, 2600);
            }
        }

        sessionStorage.setItem('whp_active', 'true');
    }, waitTime);
});

/**
 * Λειτουργία Επιλογής & Cinematic Exit
 */
function setMode(mode) {
    const gateway = document.getElementById('gateway');
    const exitOverlay = document.getElementById('exit-overlay');

    if (!gateway || !exitOverlay) return;

    // 1. Η κουρτίνα σηκώνεται προς τα πάνω
    gateway.classList.remove('active');
    gateway.classList.add('slide-up');

    // 2. Εμφάνιση του Branding Overlay (WEBHOSTPRO)
    setTimeout(() => {
        exitOverlay.classList.add('show');
    }, 600);

    // 3. Αναμονή στο Branding (Hold) και μετά Redirect
    // Συνολικός χρόνος αναμονής 2500ms (2.5 δευτερόλεπτα)
    setTimeout(() => {
        
        // Προσθέτουμε ένα απαλό fade πριν την αλλαγή σελίδας
        exitOverlay.style.opacity = '0';
        exitOverlay.style.transition = 'opacity 0.6s ease';

        setTimeout(() => {
            if (mode === 'tech') {
                window.location.href = "technical.html";
            } else {
                window.location.href = "simple.html";
            }
        }, 600); // Χρόνος για να ολοκληρωθεί το σβήσιμο

    }, 2500); 
}