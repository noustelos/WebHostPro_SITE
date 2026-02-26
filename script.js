document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. INDEX LOGIC (WAVEFORM & TRANSITION) --- */
    const barsContainer = document.getElementById('bars');
    if (barsContainer) {
        for (let i = 0; i < 36; i++) {
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x", "98"); rect.setAttribute("y", "20");
            rect.setAttribute("width", "3"); rect.setAttribute("height", (15 + Math.random() * 35).toString());
            rect.setAttribute("rx", "1.5"); rect.setAttribute("fill", "#333"); 
            rect.setAttribute("transform", `rotate(${i * 10} 100 100)`);
            rect.style.animation = `waveform 1.5s ease-in-out infinite`;
            rect.style.animationDelay = `${i * 0.1}s`;
            barsContainer.appendChild(rect);
        }
    }

    // ΤΟ ΚΟΜΜΑΤΙ ΠΟΥ ΕΛΕΙΠΕ: Η μετάβαση από το Waveform στην Κουρτίνα
    const screenPulse = document.getElementById('screen-pulse');
    const screenChoice = document.getElementById('screen-choice');
    const choiceContent = document.getElementById('choice-content');

    if (screenPulse && screenChoice && choiceContent) {
        setTimeout(() => {
            // 1. Κατεβαίνει η κουρτίνα
            screenChoice.classList.remove('-translate-y-full');
            screenChoice.classList.add('translate-y-0');
            
            // 2. Σβήνει το waveform (fade out)
            setTimeout(() => {
                screenPulse.style.transition = 'opacity 0.5s ease-out';
                screenPulse.style.opacity = '0';
                setTimeout(() => screenPulse.style.display = 'none', 500);
            }, 200);
            
            // 3. Εμφανίζονται τα κείμενα/κουμπιά
            setTimeout(() => {
                choiceContent.classList.remove('opacity-0');
                choiceContent.classList.add('opacity-100');
            }, 800);
        }, 3000); // 3 δευτερόλεπτα αναμονή
    }

    /* --- 2. GR.HTML IDENTICAL MIRROR LOGIC --- */
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    const body = document.getElementById('main-body');
    const img = document.getElementById('hero-img');
    const subtext = document.getElementById('hero-subtext');
    const toggleLink = document.getElementById('toggle-link');
    const btnBottomText = document.getElementById('btn-bottom-text');
    const ctaBtn = document.getElementById('cta-btn');
    const logo = document.getElementById('nav-logo');
    const titleWelcome = document.querySelector('.title-welcome');
    const titleHands = document.querySelector('.title-hands');

    if (body) {
        // Κοινά Στοιχεία
        if(ctaBtn) {
            ctaBtn.innerText = 'ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ';
            ctaBtn.style.setProperty('background-color', '#14B8A6', 'important');
            ctaBtn.style.setProperty('color', '#ffffff', 'important');
        }
        if(titleWelcome) titleWelcome.style.setProperty('color', '#0d9488', 'important');
        if(titleHands) titleHands.style.setProperty('color', '#14b8a6', 'important');

        if (mode === 'tech') {
            /* --- TECH MODE --- */
            body.className = 'mode-tech bg-black';
            if(img) img.src = 'assets/red_fem_1.jpeg';
            if(logo) logo.style.setProperty('color', '#2dd4bf', 'important');
            if(subtext) {
                subtext.style.setProperty('color', '#042f2e', 'important'); 
                subtext.style.setProperty('text-align', 'right', 'important');
                subtext.innerHTML = 'θα μιλούσαμε μαζί σας binary<br>αλλά η python είναι πιο απλή.';
            }
            if(btnBottomText) btnBottomText.innerText = 'ΑΠΛΑ';
            if(toggleLink) {
                toggleLink.href = 'gr.html?mode=simple';
                toggleLink.style.setProperty('background-color', '#007AFF', 'important');
            }
        } else {
            /* --- SIMPLE MODE --- */
            body.className = 'mode-simple bg-[#F6F5F2]';
            if(img) img.src = 'assets/blue_fem_1.jpeg';
            if(logo) logo.style.setProperty('color', '#065f46', 'important');
            if(subtext) {
                subtext.style.setProperty('color', '#042f2e', 'important');
                subtext.style.setProperty('text-align', 'right', 'important');
                subtext.innerHTML = 'η τεχνολογία γίνεται κατανοητή<br>όταν την χειρίζονται άνθρωποι που μιλάνε απλά.';
            }
            if(btnBottomText) btnBottomText.innerText = 'ΤΕΧΝΙΚΑ';
            if(toggleLink) {
                toggleLink.href = 'gr.html?mode=tech';
                toggleLink.style.setProperty('background-color', '#FF3B30', 'important');
            }
        }
    }
});