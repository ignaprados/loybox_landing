/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: false,
  });

  /* = SCROLL HOME = */
  sr.reveal('.landing-user-navbar',{delay:100, origin:'top'});
  sr.reveal('.textTitle',{delay: 100, origin: 'bottom'});

/* = SCROLL IMG = */
sr.reveal('.imagen',{delay: 1000, interval: 350, origin: 'bottom'});

