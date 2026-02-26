document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const gateway = document.getElementById('gateway');
    
    // Έλεγχος αν έχει ξαναμπεί στη συνεδρία
    const hasVisited = sessionStorage.getItem('whp_active');
    const waitTime = hasVisited ? 300 : 2800; 

    setTimeout(() => {
        if (introScreen) {
            introScreen.style.transition = 'opacity 1.4s ease';
            introScreen.style.opacity = '0';
            setTimeout(() => introScreen.style.display = 'none', 1400);
        }
        
        // Εμφάνιση Gateway
        if (gateway) gateway.classList.add('active');
        
        sessionStorage.setItem('whp_active', 'true');
    }, waitTime);
});

function setMode(mode) {
    const gateway = document.getElementById('gateway');
    if (gateway) {
        // Cinematic Slide Up
        gateway.style.transform = "translateY(-100%)";
        
        setTimeout(() => {
            if(mode === 'tech') {
                window.location.href = "technical.html";
            } else {
                window.location.href = "simple.html";
            }
        }, 1400); // Συγχρονισμός με το CSS transition
    }
}