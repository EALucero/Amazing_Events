import data from "./data.js";

const Show = (data) => {
    let cardList = document.getElementById("cardList");

    data.events.forEach(e => {
        cardList.innerHTML += `<div class="col-2 card text-center m-2 mt-5">
            <img src="${e.image}" class="card-img-top" alt="imagen">
            <div class="card-body">
                <h5 class="card-title">${e.name}</h5>
                <p class="card-text">${e.description}</p>
                <div class="d-flex justify-content-around">
                    <p class="card-text">Price $ ${e.price}</p>
                    <a href="./details.html" type="button" class="btn btn-outline-secondary btn-sm">ver mas</a>
                </div>           
                </div>
            </div>`
    });
}

Show(data);