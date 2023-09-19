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
sr.reveal('.imagen',{delay: 400, interval: 50, origin: 'bottom'});

/* = SCROLL ABOUT = */
sr.reveal('.title2',{delay: 300, origin: 'bottom'});
sr.reveal('.divWhiteTitle',{delay: 300, origin: 'left'});
sr.reveal('.formWhite',{delay: 300, origin: 'right'});
sr.reveal('.title3',{delay: 600, origin: 'bottom'});
sr.reveal('.line',{delay: 100, origin: 'bottom'});
sr.reveal('.credits',{delay: 200, origin: 'bottom'});
sr.reveal('.loyvectors',{delay: 500, origin: 'bottom'});