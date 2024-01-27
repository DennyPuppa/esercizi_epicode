// JS ESERCIZIO 1
window.onload = function(){
    const linkTwitter = document.querySelector(".blog-sidebar div:last-child li:nth-of-type(2)");    
    // console.log(linkTwitter);
    linkTwitter.remove();
}

//JS ESERCIZIO 2
const links = document.querySelectorAll(".stretched-link");
links.forEach(link => {
    link.addEventListener("click", function(event){
        console.log(event.target.closest(".col-md-6"));
        event.target.closest(".col-md-6").remove();
    })
});

// JS ESERCIZIO 3
const authors = document.querySelectorAll(".blog-post-meta a");
authors.forEach(author => {
    author.addEventListener("mouseover", function(){
        alert(author.innerHTML);
    })
});
