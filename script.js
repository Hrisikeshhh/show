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

