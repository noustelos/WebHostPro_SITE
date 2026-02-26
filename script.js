/**
 * WebHostPro Master Script
 * Version: 2.3 (6s Timing & Smooth Gateway Fix)
 */

document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const gateway = document.getElementById('gateway');
    
    // Ρύθμιση στα 6 δευτερόλεπτα (6000ms)
    const hasVisited = sessionStorage.getItem('whp_session_active');
    const waitTime = hasVisited ? 500 : 6000; 

    setTimeout(() => {
        if (introScreen && gateway) {
            // 1. Ενεργοποιούμε το Gateway (ξεκινάει το αργό fade in)
            gateway.classList.add('active');
            
            // 2. Ταυτόχρονα, ξεκινάμε το fade out του Intro/Pulse
            // Χρησιμοποιούμε τον ίδιο χρόνο (2.5s) για τέλειο cross-fade
            introScreen.style.transition = 'opacity 2.5s cubic-bezier(0.4, 0, 0.2, 1)';
            introScreen.style.opacity = '0';
            
            // 3. Αφαιρούμε το intro από το προσκήνιο αφού ολοκληρωθεί το εφέ
            setTimeout(() => {
                introScreen.style.display = 'none';
            }, 2500);
        }
        sessionStorage.setItem('whp_session_active', 'true');
    }, waitTime);
});

// ... setMode, applyModeLogic και toggleModeUI παραμένουν όπως τα έχουμε διορθώσει ...
/* --- 3. SET MODE (Επιλογή από το Τζάμι) --- */
function setMode(mode) {
    const gateway = document.getElementById('gateway');
    const main = document.getElementById('main-content');
    
    if (gateway) {
        // Το τζάμι ανεβαίνει προς τα πάνω (αφαίρεση active)
        gateway.classList.remove('active'); 
        
        setTimeout(() => {
            gateway.style.display = 'none';
            if (main) {
                // Αποκάλυψη του κυρίως site (Hero Section)
                main.classList.add('show-content');
                applyModeLogic(mode);
            }
        }, 800);
    }
}

/* --- 4. APPLY MODE LOGIC (Simple / Tech) --- */
function applyModeLogic(mode) {
    const body = document.body;
    const subtext = document.getElementById('hero-subtext');
    const imgSimple = document.getElementById('img-simple');
    const imgTech = document.getElementById('img-tech');
    const btnBottomText = document.getElementById('btn-bottom-text');
    const toggleLink = document.getElementById('toggle-link');
    const ctaBtn = document.getElementById('cta-btn');

    // Καθαρισμός κλάσεων για το body
    body.classList.remove('mode-tech', 'mode-simple');

    if (mode === 'tech') {
        body.classList.add('mode-tech');
        if(imgSimple) imgSimple.classList.remove('active');
        if(imgTech) imgTech.classList.add('active');
        
        if(subtext) {
            subtext.style.setProperty('color', '#042f2e', 'important'); 
            subtext.innerHTML = 'θα μιλούσαμε μαζί σας binary<br>αλλά η python είναι πιο απλή.';
        }
        if(btnBottomText) btnBottomText.innerText = 'ΑΠΛΑ';
        if(toggleLink) toggleLink.style.setProperty('background-color', '#007AFF', 'important');
        if(ctaBtn) ctaBtn.innerText = 'TECH SPECS';
    } else {
        body.classList.add('mode-simple');
        if(imgTech) imgTech.classList.remove('active');
        if(imgSimple) imgSimple.classList.add('active');
        
        if(subtext) {
            subtext.style.setProperty('color', '#042f2e', 'important');
            subtext.innerHTML = 'η τεχνολογία γίνεται κατανοητή<br>όταν την χειρίζονται άνθρωποι που μιλάνε απλά.';
        }
        if(btnBottomText) btnBottomText.innerText = 'ΤΕΧΝΙΚΑ';
        if(toggleLink) toggleLink.style.setProperty('background-color', '#FF3B30', 'important');
        if(ctaBtn) ctaBtn.innerText = 'ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ';
    }
}

/* --- 5. UI TOGGLE & RESET --- */
function toggleModeUI(event) {
    if (event) event.preventDefault();
    const isTech = document.body.classList.contains('mode-tech');
    applyModeLogic(isTech ? 'simple' : 'tech');
}

function resetToGateway() {
    sessionStorage.removeItem('whp_session_active');
    location.reload();
}