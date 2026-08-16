let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "-20% 65%",
    end: "95% 65%",
    scrub: true,
    // markers: true
  }
});

tl.to("#can", {
  top: "119%",
  left: "-5%"
}, 'hello');

tl.to("#fruits", {
    top: "135%",
    left: "-2%",
    height: "55%",
    rotate: "110deg"
}, 'hello');

gsap.to("#h",{
  width: "100%",
  scrollTrigger: {
    trigger: ".page2_right",
    start: "50% 99%",
    scrub: 1
  }
})

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scrub: true
  }
});

tl2.to("#can", {
  y: 840,
  x: 700,
  scale: 0.9
});
