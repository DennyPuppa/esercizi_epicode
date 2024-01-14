const main = document.querySelector("main");

function searchJob(title, location){
    title = title.toLowerCase();
    location = location.toLowerCase();

    const result = [];
    jobs.forEach(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        if(jobTitle.includes(title) && jobLocation.includes(location)){
            result.push(job)
        }
    });
    return{
        count: result.length,
        result
    }
}

//searchJob()
//console.log(searchJob("marketing", "berlin"));

function search(){
    const title = document.querySelector("#search-job").value;
    const location = document.querySelector("#search-place").value;

    const searchResult = searchJob(title, location);
    console.log(searchResult);
    return searchResult;
}

const form = document.querySelector("#form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    main.textContent = "";
    createCard(search());
    form.reset();
    footerFixed();
})

function createCard(searchResults){
    const container = document.createElement("div");
    container.classList.add("container-card");
    searchResults.result.forEach(searchItem => {
        const singleCard = document.createElement("div");
        singleCard.classList.add("single-card");
        const cardData = document.createElement("h3");
        cardData.textContent = `title: ${searchItem.title}, location: ${searchItem.location}`;
        // const likeBtn = document.createElement("button");
        const likeIcon = document.createElement("i");
        likeIcon.classList.add("fa-solid", "fa-thumbs-up","like-icon")

        singleCard.append(cardData);
        // singleCard.append(likeBtn);
        singleCard.append(likeIcon)
        container.append(singleCard);

        likeIcon.addEventListener("click", ()=>{
            openOverlay();
            closeOverlay();
            // controlOverlay();
            // closeOverlay();
        })
    });
    main.append(container);

}

// function controlOverlay(){
//     const overlay = document.querySelector("#overlay");
//     if(overlay.style.display == "block"){
//         overlay.style.display = "none";
//     }else{
//         overlay.style.display = "block";
//     }
// }

function openOverlay(){
    const overlay = document.querySelector("#overlay");
    overlay.classList.toggle("hidden");
}

function closeOverlay(){
    const closeBtn = document.querySelector(".btn-close")
    closeBtn.addEventListener("click", ()=>{
        const overlay = document.querySelector("#overlay");
        overlay.classList.add("hidden");
        // controlOverlay();
    })
}

function scrollHeader(){
    const header = document.querySelector("header");
    header.classList.add("fixed-header");
    main.classList.add("main-margin");
}

function footerFixed(){
    const footer = document.querySelector("footer");
    footer.classList.add("toggle-fixed");
}

window.addEventListener("scroll", (event)=>{
    // console.log(event);
    scrollHeader();
});
