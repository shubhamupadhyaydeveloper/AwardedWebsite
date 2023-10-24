let tl = gsap.timeline();
tl.from("#nav", {
  y: -20,
  duration: 1,
  stagger: 0.4,
  delay: 0.5,
  opacity: 0,
});

tl.from("#text h1", {
  x: -160,
  duration: 0.3,
  delay: 0.3,
  opacity: 0,
});

tl.from("#text h5", {
  x: 160,
  duration: 0.3,
  delay: 0.3,
  opacity: 0,
});

tl.to(".elem", {
  y: 0,
  duration: 1,
  ease: Expo.easeInOut,
  stagger: 0.3,
});

tl.from("#page1last", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4,
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function mouseshapechange() {
  let scaleX = 1;
  let scaleY = 1;

  let posX = 0;
  let posY = 0;

  let timeout;

  window.addEventListener("mousemove", (event) => {
    clearInterval(timeout);

    let diffX = event.clientX - posX;
    let diffY = event.clientY - posY;

    posX = event.clientX;
    posY = event.clientY;

    scaleX = gsap.utils.clamp(0.7, 1.3, diffX);
    scaleY = gsap.utils.clamp(0.7, 1.3, diffY);

    followminicircle(scaleX, scaleY);

    timeout = setInterval(() => {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${event.clientX}px , ${event.clientY}px) scale(1,1)`;
    }, 100);
  });
}

mouseshapechange();

function followminicircle(scaleX, scaleY) {
  window.addEventListener("mousemove", (event) => {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${event.clientX}px , ${event.clientY}px) scale(${scaleX} , ${scaleY})`;
  });
}

followminicircle();

function Rotateimage() {



  document.querySelectorAll(".boxcontent").forEach((event) => {

    let diffrot = 0
    let  rotate  =  0

    event.addEventListener('mouseleave' ,  () =>   {
      gsap.to(event.querySelector("img"), {
        opacity : 0 ,
        ease: Power3,
      duration: 0.5,
      })
    })

    event.addEventListener("mousemove", (detail) => {
      let heightdiff = detail.clientY - event.getBoundingClientRect().top;

      diffrot =  detail.clientX - rotate
      rotate   =  detail.clientX
      
      let finrot =  gsap.utils.clamp(-20 , 20 , diffrot)

      gsap.to(event.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: heightdiff,
        left: detail.clientX,
        rotate : finrot
      });
    });
  });
}

Rotateimage();

// document.querySelectorAll(".boxcontent").forEach(function (elem) {
//   var rotate = 0;
//   var diffrot = 0;

//   elem.addEventListener("mouseleave", function (dets) {
//     gsap.to(elem.querySelector("img"), {
//       opacity: 0,
//       ease: Power3,
//       duration: 0.5,
//     });
//   });

//   elem.addEventListener("mousemove", function (dets) {
//     var diff = dets.clientY - elem.getBoundingClientRect().top;
//     diffrot = dets.clientX - rotate;
//     rotate = dets.clientX;
//     gsap.to(elem.querySelector("img"), {
//       opacity: 1,
//       ease: Power3,
//       top: diff,
//       left: dets.clientX,
//       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//     });
//   });
// });
