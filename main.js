(function ($) {
    "use strict";

    // Typed.js Implementation
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 60,
            backSpeed: 30,
            smartBackspace: true,
            loop: true
        });
    }

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth Scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // Navbar Scroll Effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.nav-glass').css('padding', '8px 25px');
            $('.nav-glass').css('background', 'rgba(15, 23, 42, 0.95)');
        } else {
            $('.nav-glass').css('padding', '12px 30px');
            $('.nav-glass').css('background', 'rgba(15, 23, 42, 0.8)');
        }
    });

    // Simple Form Submission Placeholder
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const btn = $(this).find('button');
        const originalText = btn.html();
        
        btn.html('<i class="fas fa-spinner fa-spin"></i> Sending...');
        btn.prop('disabled', true);
        
        setTimeout(() => {
            btn.html('<i class="fas fa-check"></i> Message Sent!');
            btn.css('background', '#10b981');
            
            setTimeout(() => {
                btn.html(originalText);
                btn.css('background', '');
                btn.prop('disabled', false);
                $('#contactForm')[0].reset();
            }, 3000);
        }, 1500);
    });

})(jQuery);
