// Purtroppo causa contrattempi familiari non sono riuscito a implementare maggiormente l'esercizio lo carico così
// ma lo continuerò ad aggiornare

const url = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='
const searchUrl = document.getElementById('searchField')
const btnSearch = document.querySelector('#button-search')
const cardContainer = document.querySelector('#searchResults div')

btnSearch.addEventListener("click", ()=>{
    clearPage();
    const albums = getAlbum().then(res => {
        res.data.map(album => createCard(album))
    })
})

const getAlbum = async () => {
    try {
        const response = await fetch(url + searchUrl.value)
        const data = await response.json()
        console.log(data);
        return data

    } catch (error) {
        console.log(error);
    }
}

const createCard = (album) => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = album.album.cover_xl;

    const albumTitle = document.createElement("h5");
    albumTitle.innerHTML = album.title;

    card.append(img, albumTitle);
    cardContainer.append(card);
} 

const clearPage = () =>{
    cardContainer.innerHTML = "";
}