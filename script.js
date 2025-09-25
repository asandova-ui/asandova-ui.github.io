// Advanced Animation System
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for any anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Interactive 3D Object
    const floatingObject = document.querySelector('.floating-object');
    const cube = document.querySelector('.cube');
    const particles = document.querySelectorAll('.particle');
    
    // Mouse interaction
    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        
        // Parallax effect
        floatingObject.style.transform = `translate(-50%, -50%) translate(${x * 20}px, ${y * 20}px)`;
        
        // 3D rotation based on mouse position
        cube.style.transform = `rotateX(${y * 20}deg) rotateY(${x * 20}deg)`;
    });

    // Dynamic particle system
    function createDynamicParticles() {
        const particleSystem = document.querySelector('.particle-system');
        
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'dynamic-particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: #007AFF;
                border-radius: 50%;
                box-shadow: 0 0 6px #007AFF;
                top: 50%;
                left: 50%;
                animation: particleFloat 3s ease-out forwards;
            `;
            
            particleSystem.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 3000);
        }, 200);
    }

    // Energy pulse effect
    function createEnergyPulse() {
        const rings = document.querySelectorAll('.ring');
        
        setInterval(() => {
            rings.forEach((ring, index) => {
                ring.style.boxShadow = `0 0 20px ${index === 0 ? '#007AFF' : index === 1 ? '#5856D6' : '#FF3B30'}`;
                
                setTimeout(() => {
                    ring.style.boxShadow = 'none';
                }, 500);
            });
        }, 2000);
    }

    // Initialize effects
    createDynamicParticles();
    createEnergyPulse();

    // Add CSS for dynamic particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            50% {
                transform: translate(-50%, -50%) translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1);
                opacity: 0.8;
            }
            100% {
                transform: translate(-50%, -50%) translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});