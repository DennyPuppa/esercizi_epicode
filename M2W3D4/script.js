//Funzione cambio titolo
const changeTitle = function () {
    document.querySelector('#title').innerText = "Il mio negozio è bello!"
}

//changeTitle ();

//Funzione cambio Background
const changeBackgroundColor = function () {
    document.querySelector('body').style.backgroundColor = 'blue'
  }

//changeBackgroundColor ();

//Funzione cambio indirizzo
const changeAddress = function(){
    document.querySelector('#address').innerText = "Nuovo indirizzo Fittizio!"
}

//changeAddress ();

//Funzione aggiunta classe link
const addClassLinks = function (){
    let tagA = document.querySelectorAll('a')
    console.log(tagA);
    for (let i = 0; i < tagA.length; i++) {
        tagA[i].classList.add('link-class-added');
        
    }
}

//addClassLinks ()

//Funzione Visibilità immagine
const addImageClass = function () {
    let images = document.querySelectorAll('img')
    for (let i = 0; i < images.length; i++) {
      const singleImg = images[i]
      singleImg.classList.toggle('hidden')}

    }

//Funzione creazione colore Random (COPIATA DALLA SOLUZIONE NON AVEVO IDEA DI COME APPROCCIARLA)
const getRandomColor = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  }

//Funzione colore Randomico OnClick sui prezzi
const randomColor = function (){
    let color = getRandomColor();
    let prices = document.querySelectorAll('.price')
    //console.log(prices);
    for (let i = 0; i < prices.length; i++) {
        let singlePrice = prices[i];
        singlePrice.style.color = color;    
    }
}
