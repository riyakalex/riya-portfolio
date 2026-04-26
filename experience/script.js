$(document).ready(function () {

    /* ===== NAVBAR & MENU TOGGLE ===== */
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy for active navbar links
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    /* ===== DYNAMIC TYPING EFFECT (The "I am into..." text) ===== */
    var typed = new Typed(".typing-text", {
        strings: [
            "ASIC Logic Synthesis",
            "High-speed Circuit Systems",
            "Embedded Systems Research",
            "Technical Documentation",
            "Video Editing & VFX",
            "Sustainable Engineering"
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });
});

/* ===== SKILLS DATA & INJECTION ===== */
const skills = [
    { name: "Verilog HDL", icon: "https://img.icons8.com/color/48/000000/processor.png" },
    { name: "KiCad PCB", icon: "https://img.icons8.com/color/48/000000/circuit.png" },
    { name: "SystemVerilog", icon: "https://img.icons8.com/color/48/000000/microchip.png" },
    { name: "Embedded C", icon: "https://img.icons8.com/color/48/000000/c-programming.png" },
    { name: "Edge AI", icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png" },
    { name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
    { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
    { name: "VFX (Fusion)", icon: "https://img.icons8.com/color/48/000000/video-editing.png" },
    { name: "Technical Writing", icon: "https://img.icons8.com/color/48/000000/copybook.png" }
];

const showSkills = (skills) => {
    let skillsContainer = document.querySelector("#skills .box-container");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="box">
            <img src="${skill.icon}" alt="${skill.name}">
            <span>${skill.name}</span>
        </div>`;
    });
    if (skillsContainer) {
        skillsContainer.innerHTML = skillHTML;
    }
}
showSkills(skills);

/* ===== SCROLL REVEAL ANIMATIONS ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 300 });

srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content p', { delay: 300 });

srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .box', { delay: 400 });

srtop.reveal('.education .box', { interval: 200 });
srtop.reveal('.work .box', { interval: 200 });
srtop.reveal('.experience .timeline', { delay: 400 });

/* ===== TAB TITLE CHANGES ===== */
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Riya K Alex | Portfolio";
    } else {
        document.title = "Come Back!";
    }
});