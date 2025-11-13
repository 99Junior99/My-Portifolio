$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, .2');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.slide', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    $(document).ready(function () {

        // Aplicar tema salvo
        if (localStorage.getItem('theme') === 'dark') {
            $('body, header, sobre, footer').addClass('dark-mode');
            $('#darkModeToggle i').addClass('fa-toggle-on');
            $('#dec').addClass('fa-moon');
            $('.footer-img').attr('src', '../images/wave-dark.svg');
        } else {
            $('.footer-img').attr('src', '../images/wave-light.svg');
        }

        // Alternar tema ao clicar
        $('#darkModeToggle').on('click', function () {
            $('body, header, sobre, footer').toggleClass('dark-mode');
            $('#darkModeToggle i').toggleClass('fa-toggle-on');
            $('#dec').toggleClass('fa-moon');

            // Verifica qual tema está ativo e muda a imagem
            if ($('body').hasClass('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                $('.footer-img').attr('src', '../src/images/wave-dark.svg');
            } else {
                localStorage.setItem('theme', 'light');
                $('.footer-img').attr('src', '../src/images/wave-light.svg');
            }
        });
    });

});

