const navbar = document.querySelector(".navbar")
let previousScrollPosition = window.pageYOffset;

addEventListener("scroll", ()=>{
    console.log(window.pageYOffset);
    handlePageScroll();
})

function handlePageScroll(){
    const currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition) {
        navbar.classList.remove("hide-navbar");
        navbar.classList.add("show-navbar");
        if(currentScrollPosition === 0){
            navbar.classList.remove("navbar-fixed");
        }
    } else{
        navbar.classList.add("hide-navbar");
        navbar.classList.add("navbar-fixed");
    }
    previousScrollPosition = currentScrollPosition;
}