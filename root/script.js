document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.getElementById('heart-container');
    const loveBtn = document.getElementById('love-btn');

    // Create a single floating heart
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Randomize the heart symbol (different styles of hearts/sparkles)
        const hearts = ['❤️', '💖', '✨', '💕', '💗'];
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Random horizontal position
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration between 3s and 6s
        const duration = Math.random() * 3 + 3;
        heart.style.animationDuration = duration + 's';
        
        // Random size
        const size = Math.random() * 15 + 10;
        heart.style.fontSize = size + 'px';
        
        heartContainer.appendChild(heart);
        
        // Remove heart after animation completes to avoid memory leaks
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // Continuously create hearts in the background
    setInterval(createHeart, 800);

    if (loveBtn) {
        // Button click effect (burst of hearts)
        loveBtn.addEventListener('click', () => {
            // Change button text temporarily
            const originalText = loveBtn.innerText;
            loveBtn.innerText = "I love you! ❤️";
            
            // Create a burst of hearts
            for (let i = 0; i < 30; i++) {
                setTimeout(createHeart, i * 50);
            }
            
            setTimeout(() => {
                loveBtn.innerText = originalText;
                // Redirect to the new message page
                window.location.href = "message.html";
            }, 2000);
        });
    }
});
