const url = "https://striveschool-api.herokuapp.com/books";
const cardSection = document.querySelector("#cardSection");

const getBookCard = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data

    } catch (error) {
        console.log();
    }
}

getBookCard().then(res => {
    cardSection.innerHTML = res
    .map((book) => {
        return /* HTML */ `<div class="col-12 col-md-3">
        <div id="book-${book.asin}" class="card mb-3 rounded-3 shadow">
            <img src="${book.img}" alt="">
            <div class="card-body">
                <p class="text-truncate book-title"> ${book.title} </p>
                <p class="book-price"> ${book.price}€</p>
                <button class="btn btn-primary ">Aggiungi al Carrello</button>
            </div>
        </div>
    </div>`
    }).join("")
    let btnCart = document.querySelectorAll(".card-body button");
    btnCart = Array.from(btnCart)
    console.log(cardSection);
    btnCart.forEach(btn => {
        btn.addEventListener("click", function (){
            const bookID = this.parentElement.parentElement.id
            const bookTitle = document.querySelector(".card-body .book-title").textContent
            const bookPrice = document.querySelector(".card-body .book-price").textContent
            addCart(bookID, bookTitle, bookPrice)
            console.log("ciao");
        })
    })
})

const addCart = (asin, title, price) => {
    const bookList = document.querySelector("#cart-products");
    const bookCard = document.querySelector("#" + asin)
    bookCard.classList.add("book-purchased");

    bookList.innerHTML = `<li class="d-flex align-items-center">${title} ${price} 
    <button class="btn btn-danger">Rimuovi dal carrello</button></li>`

    let totalCart = document.querySelector("#total")
    totalCart.innerHTML = (Number(totalCart.innerText) + Number(price))
}
