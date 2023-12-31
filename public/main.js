/* ===== INTRO ===== */
const tl = gsap.timeline({ defaults: { ease: Power1.easeInOut } });
const home = document.getElementById('preloader')

tl.fromTo(".preloaderBg", { opacity: 1 }, { opacity: 0, delay: 1.6 });
tl.fromTo(".preloaderLogo", { opacity: 1 }, { opacity: 0, delay: 1.6 });

tl.to(".preloaderBg", { y: "-100%", duration: .75, delay: 1.8 });

/* display none preloaderbg after 4 sec */
setTimeout(function () {
    home.style.display = "none";
}, 2000);

/* html overflow-y auto after 1.6s */
setTimeout(function () {
    document.getElementsByTagName("html")[0].style.overflowY = "auto";
}, 2100);

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
sr.reveal('.descript',{delay: 400, interval: 50, origin: 'left'});

/* = SCROLL ABOUT = */
sr.reveal('.title2',{delay: 300, origin: 'bottom'});
sr.reveal('.divWhiteTitle',{delay: 300, origin: 'left'});
sr.reveal('.formWhite',{delay: 300, origin: 'right'});
sr.reveal('.title3',{delay: 400, origin: 'bottom'});

