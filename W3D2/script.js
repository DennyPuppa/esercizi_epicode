const liTexts = ['Consegna gratuita a partire da 24,99', 'Premi esclusivi Nintendo', 'Resi Gratuiti'];
const navUl = document.getElementById('bottom-menu');
const createLi = document.createElement('li');
const cardContainer = document.getElementById('card-container');

// createLi.innerText = liTexts[0];
// navUl.append(createLi.cloneNode(true));
// createLi.innerText = liTexts[1];
// navUl.append(createLi.cloneNode(true));
// createLi.innerText = liTexts[2];
// navUl.append(createLi.cloneNode(true));

// const listItems = liTexts.map((item)=>{
//     const li = document.createElement('li');
//     li.innerText = item;
//     navUl.append(li);

//     return li
// });

liTexts.forEach((index)=>{
    const li = document.createElement('li');
    li.innerText = index;
    navUl.append(li);
});

function createCard(src, title, paragraph){
    const createDiv = document.createElement('div');
    createDiv.classList.add('card');

    const createImg = document.createElement('img');
    createImg.classList.add('card-img');
    createImg.src = src;

    const createTitle = document.createElement('h2');
    createTitle.innerText = title;

    const createParagraph = document.createElement('p');
    createParagraph.innerText = paragraph;

    createDiv.append(createImg, createTitle, createParagraph);
    cardContainer.append(createDiv);
}

createCard('http://placebeard.it/200/300', 'Sono la card 2', 'Sono la descrizione 2');
createCard('http://placebeard.it/200/300', 'Sono la card 3', 'Sono la descrizione 3');
createCard('http://placebeard.it/200/300', 'Sono la card 4', 'Sono la descrizione 4');