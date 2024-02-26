const watchCarousel = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("l'elemento è nella viewport");
      entry.target.classList.add("row-enter-animation");
      entry.target.classList.remove("row-hidden");
      observer.unobserve(entry.target);
    } else {
      console.log("l'elemento è uscito dalla viewport");
      entry.target.classList.remove("row-enter-animation")
      entry.target.classList.add("row-hidden");
    }
  });
}

const observer = new IntersectionObserver(watchCarousel, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
})

const targetElement = document.querySelectorAll(".carousel")

// observer.observe(targetElement);

targetElement.forEach((carousel) => {
  observer.observe(carousel);
})


//   addEventListener("scroll", ()=>{
//     let scrollPosition = window.pageYOffset;
//     console.log(scrollPosition);
//   })

let scrollBtn = document.querySelector("#scrollBtn");

const showOnScroll = ()=>{
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    scrollBtn.style.display = "block";
  }else{
    scrollBtn.style.display = "none";
  }
}

window.addEventListener("scroll", showOnScroll);

const scrollTopFunction = ()=> {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollBtn.addEventListener("click", scrollTopFunction);