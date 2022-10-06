const submitButton = document.getElementById("submit_button");
const cardsContainer = document.getElementById("items_container");
const countButton = document.getElementById("count_button");
const countResult = document.getElementById("count_result");
const sortCheckbox = document.getElementById("sort_checkbox");
const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const doggos= [...document.querySelectorAll(".doggos__doge-card")];
const findInput = document.getElementById("find_input");

const HIDDEN_CLASSNAME = "hidden";


searchButton.addEventListener("click", () => {

    const doggosArray = [...document.querySelectorAll(".doggos__doge-card")];
    const titles = [];
    doggosArray.forEach(card => {
        const titleElement = card.querySelector(".doggos__doge-card-content").querySelector(".doggos__doge-card-title");
        titles.push(titleElement.innerHTML);
    });
    const foundDoggos = titles.filter(title => title.search(findInput.value) !== -1);
    doggosArray.forEach(card => {
        const titleElement = card.querySelector(".doggos__doge-card-content").querySelector(".doggos__doge-card-title");
        if (!foundDoggos.includes(titleElement.innerHTML)) {
            if (!card.classList.contains(HIDDEN_CLASSNAME)) {
                card.classList.add(HIDDEN_CLASSNAME);
            }
        } else {
            if (card.classList.contains(HIDDEN_CLASSNAME)) {
                card.classList.remove(HIDDEN_CLASSNAME);
            }
        }});

});

clearButton.addEventListener("click", () => {
    findInput.value = "";
    const doggosArray = [...document.querySelectorAll(".doggos__doge-card")];
    doggosArray.forEach(doge => {
        doge.classList.remove(HIDDEN_CLASSNAME);
    });
});



sortCheckbox.addEventListener("change", e => {
    if (e.target.checked) {
        const doggosSorted = doggos.map((x) => x);
        doggosSorted.sort((a, b) => 
            parseInt(a.querySelector(".doggos__doge-card-content").querySelector(".doggos__doge-card-fun-level").innerHTML.slice(0, -1)) - 
            parseInt(b.querySelector(".doggos__doge-card-content").querySelector(".doggos__doge-card-fun-level").innerHTML.slice(0, -1)));
        cardsContainer.innerHTML = "";
        doggosSorted.forEach(card => {
            cardsContainer.insertAdjacentHTML(
                "afterbegin",
                card.outerHTML
            );
        });
    } else {
        cardsContainer.innerHTML = "";
        doggos.slice().reverse().forEach(card => {
            cardsContainer.insertAdjacentHTML(
                "afterbegin",
                card.outerHTML
            );
        });
    }
});


countButton.addEventListener("click", () => {

    countResult.innerHTML = `${doggos.length} doggos`;
});




