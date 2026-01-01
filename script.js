let contactBtn = document.querySelectorAll('.contactBtn');
let section8 = document.querySelector('.section8');
contactBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      section8.scrollIntoView({
        behavior:"smooth"
      })
    })
})

let navBenefit = document.querySelector('#navBenefit');
let section6 = document.querySelector('.section6');

navBenefit.addEventListener('click',()=>{
  section6.scrollIntoView({
     behavior:"smooth"
  })
   gsap.to('.navItems',{
          x:'-100vw',
          duration:0.3
      })
})

let Review = document.querySelector('#Review');
let section5 = document.querySelector('.section5');

Review.addEventListener('click',()=>{
  section5.scrollIntoView({
    behavior:'smooth'
  })
})

// counter
 //  clients Counter

 function animateCount(element, target) {
    let count = 0;
    let step = Math.ceil(target / 180); // speed of increase
    let interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target; // stop at target
        clearInterval(interval);
        element.textContent = count + '+'
      }
      else{
      element.textContent = count ;
      }
    }, 20); // update every 20ms
  }



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv = document.getElementById("spentTime");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv, 50); // suppose 1500 clients
      observer.disconnect(); // run only once
    }
  });

  observer.observe(clientDiv);



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv1 = document.getElementById("threadWritten");
  const observer1 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv1, 30); // suppose 1500 clients
      observer1.disconnect(); // run only once
    }
  });

  observer1.observe(clientDiv1);



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv2 = document.getElementById("nichesResearched");
  const observer2 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv2, 10); // suppose 1500 clients
      observer2.disconnect(); // run only once
    }
  });

  observer2.observe(clientDiv2);

// Use IntersectionObserver so it starts when div is visible
  const clientDiv3 = document.getElementById("postStudied");
  const observer3 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv3, 100); // suppose 1500 clients
      observer3.disconnect(); // run only once
    }
  });

  observer3.observe(clientDiv3);

let mobile = gsap.matchMedia();
mobile.add('(max-width:800px)',()=>{
      let tl2 = gsap.timeline();
      let menu = document.querySelector('#menu');
      let close = document.querySelector('#close');

      tl2.to('.navItems',{
          x:'100vw',
          duration:0.3
      })
      tl2.from('.item',{
          x:20,
          stagger:0.3,
          opacity:0
      })

      tl2.pause();

      menu.addEventListener('click',()=>{
        tl2.play();
      })
      close.addEventListener('click',()=>{
        tl2.reverse();
      })

       let tl3 = gsap.timeline();

  tl3.from('.A',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.A',
      scrub:2,
      start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.a',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.a',
      scrub:2,
      start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.B',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.B',
      scrub:2,
      start:'top 95%',
      end:'top 80%'
    }
  })

  
  tl3.from('.b',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.b',
      scrub:2,
     start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.C',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.C',
      scrub:2,
     start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.c',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.c',
      scrub:2,
      start:'top 95%',
      end:'top 80%'
    }
  })

  tl3.from('.D',{
    y:50,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.D',
      scrub:2,
     start:'top 95%',
      end:'top 80%'
    }
  })
    })