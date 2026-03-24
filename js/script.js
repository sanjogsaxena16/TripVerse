document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // 2. Form submission prevention (demo mode)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show a success message depending on the form
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = 'Processing...';
                btn.style.opacity = '0.8';
                
                setTimeout(() => {
                    btn.textContent = 'Success!';
                    btn.style.background = '#10b981'; // success green
                    
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.background = ''; // reset to default css
                        form.reset();
                    }, 2000);
                }, 1000);
            }
        });
    });

    // 3. Simple scroll effect for navbar
    const nav = document.querySelector('.navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                nav.style.background = '#0f172a'; // Ensure it stays dark
            } else {
                nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // 4. "Plan Your Journey" button in Hero Section
    const planBtn = document.getElementById('planBtn');
    if (planBtn) {
        planBtn.addEventListener('click', () => {
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = 'booking.html';
            }
        });
    }
});
