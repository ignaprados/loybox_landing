/* ===== INTRO ===== */
const tl = gsap.timeline({ defaults: { ease: Power1.easeInOut } });
const home = document.getElementById('preloader')

tl.fromTo(".preloaderBg", { opacity: 1 }, { opacity: 0, delay: 1.6 });
tl.fromTo(".preloaderLogo", { opacity: 1 }, { opacity: 0, delay: 1.2 });

tl.to(".preloaderBg", { y: "-100%", duration: .75, delay: 1.8 });

/* display none preloaderbg after 4 sec */
setTimeout(function () {
    home.style.display = "none";
}, 2000);



/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: false,
  });

/* = SCROLL HOME = */
sr.reveal('.landing-user-navbar',{delay:1800, origin:'bottom'});
sr.reveal('.textTitle',{delay: 1800, origin: 'bottom'});

/* = SCROLL IMG = */
sr.reveal('.imagen1',{delay: 1800, origin: 'top'});
sr.reveal('.imagen',{delay: 400, interval: 50, origin: 'bottom'});

/* = SCROLL ABOUT = */
sr.reveal('.title2',{delay: 300, origin: 'bottom'});
sr.reveal('.divWhiteTitle',{delay: 300, origin: 'left'});
sr.reveal('.formWhite',{delay: 300, origin: 'right'});
sr.reveal('.title3',{delay: 600, origin: 'bottom'});
sr.reveal('.line',{delay: 100, origin: 'bottom'});
sr.reveal('.credits',{delay: 200, origin: 'bottom'});
sr.reveal('.loyvectors',{delay: 500, origin: 'bottom'});