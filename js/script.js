const animation = gsap.timeline({ defaults: { duration: 1 } });

animation
  .from(".card", { x: "-50vw", opacity: 0, ease: "bounce", stagger: -0.5 })
  .from(".card__img", { x: "-50vw", opacity: 0, ease: "back" })
  .from(".card__title, .card__text, .card__btn", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "slow",
  });
