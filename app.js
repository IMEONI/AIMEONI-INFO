document.addEventListener('DOMContentLoaded', () => {
    // Responsive navigation handler
    const handleResponsiveNav = () => {
        const nav = document.querySelector('.nav-links');
        const hamburger = document.createElement('button');
        hamburger.className = 'nav-toggle';
        hamburger.innerHTML = '<span class="material-icons-round">menu</span>';
        
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-container').appendChild(hamburger);
            
            hamburger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');
            });
        }
    };

    handleResponsiveNav();
    window.addEventListener('resize', handleResponsiveNav);

    // Enhanced smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                targetElement.classList.add('section-highlight');
                setTimeout(() => {
                    targetElement.classList.remove('section-highlight');
                }, 1000);
            }
        });
    });

    document.querySelector('.logo-link').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add highlight animation to hero section
        const heroSection = document.querySelector('.hero');
        heroSection.classList.add('section-highlight');
        setTimeout(() => {
            heroSection.classList.remove('section-highlight');
        }, 1000);
    
        const headerOffset = 100;
        const offsetPosition = 0 - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('.help-link, .contacts-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const notification = document.createElement('div');
            notification.className = 'notification fade-in';
            notification.innerHTML = `
                <span class="material-icons-round">rocket_launch</span>
                <span>СКОРО! Проект в разработке</span>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('fade-out');
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        });
    });
    

    document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
    }
});

    // Action buttons handlers
    const actionButtons = document.querySelectorAll('.primary-button, .secondary-button, .try-now-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const notification = document.createElement('div');
            notification.className = 'notification fade-in';
            notification.innerHTML = `
                <span class="material-icons-round">rocket_launch</span>
                <span>СКОРО! Проект в разработке</span>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('fade-out');
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        });
    });

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const icon = faq.querySelector('.material-icons-round');
                if(icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            });
            
            if (!isActive) {
                item.classList.add('active');
                const icon = item.querySelector('.material-icons-round');
                if(icon) {
                    icon.style.transform = 'rotate(180deg)';
                }
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .feature-card, .example-card, .hero-feature').forEach(element => {
        element.style.transform = 'translateY(20px)';
        element.style.opacity = '0';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });

    // Interactive elements hover effects
    const interactiveElements = document.querySelectorAll('.feature-card, .example-card, .hero-feature');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-5px)';
            element.style.boxShadow = '0 10px 30px rgba(124, 58, 237, 0.2)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0)';
            element.style.boxShadow = '0 4px 15px rgba(124, 58, 237, 0.1)';
        });
    });

    // Button active states
    const buttons = document.querySelectorAll('.primary-button, .secondary-button');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.98) translateY(1px)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1) translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Dynamic notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
            z-index: 1000;
            animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .notification .material-icons-round {
            font-size: 1.5rem;
        }

        .fade-out {
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .section-highlight {
            animation: highlightSection 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes highlightSection {
            0% {
                transform: scale(0.98);
                opacity: 0.8;
            }
            50% {
                transform: scale(1.02);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
});
