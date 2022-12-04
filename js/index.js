import {
    
    addItemToPage,
    clearInputs,
    // renderItemsList,
    getInputValues,
} from "./dom_util.js";


const HIDDEN_CLASSNAME = "hidden";
const SELECTED_CLASSNAME = "selected";


const submitButton = document.getElementById("submit_button");
const funInput = document.getElementById("fun_input");
const createDogeButton = document.getElementById("nav_create_doge");
const doggosButton = document.getElementById("nav_doggos")
const [asidePanel] = document.getElementsByClassName("aside");
const createDogeContainer = document.getElementById("create-doge");
const cardsContainer = document.getElementById("items_container");
const countButton = document.getElementById("count_button");
const countResult = document.getElementById("count_result");
const sortCheckbox = document.getElementById("sort_checkbox");
const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");

let doggos = [];

searchButton.addEventListener("click", () => {
    const findInput = document.getElementById("find_input");
    const doggosFiltered = doggos.filter(doge => doge.title.toLowerCase().includes(findInput.value));
    renderCards(doggosFiltered);
});

clearButton.addEventListener("click", () => {
    const findInput = document.getElementById("find_input");
    findInput.value = "";
    renderCards(doggos);
});

doggosButton.addEventListener("click", () => {
    asidePanel.classList.toggle(HIDDEN_CLASSNAME);
    createDogeContainer.classList.toggle(HIDDEN_CLASSNAME);
    cardsContainer.classList.toggle(HIDDEN_CLASSNAME);
    createDogeButton.parentNode.classList.toggle(SELECTED_CLASSNAME);
    doggosButton.parentNode.classList.toggle(SELECTED_CLASSNAME);
});

createDogeButton.addEventListener("click", e => {
    asidePanel.classList.toggle(HIDDEN_CLASSNAME);
    createDogeContainer.classList.toggle(HIDDEN_CLASSNAME);
    cardsContainer.classList.toggle(HIDDEN_CLASSNAME);
    createDogeButton.parentNode.classList.toggle(SELECTED_CLASSNAME);
    doggosButton.parentNode.classList.toggle(SELECTED_CLASSNAME);

});

sortCheckbox.addEventListener("change", e => {
    if (e.target.checked) {
        const doggosSorted = [...doggos];
        doggosSorted.sort((a, b) => a.fun - b.fun);
        renderCards(doggosSorted);
    } else {
        renderCards(doggos);
    }
});

const renderCards = cards => {
    [...cardsContainer.children].forEach(child => {
        cardsContainer.removeChild(child);
    });
    cards.forEach(doge => {
        addItemToPage(doge);
    })
}

countButton.addEventListener("click", () => {
    updateCount();
});

const updateCount = () => {
    countResult.removeChild(countResult.childNodes[0]);
    countResult.insertAdjacentText("afterbegin", doggos.length + " doggos");
}


const addItem = ({ title, description, fun }) => {
    const generatedId = Math.floor(Math.random() * Date.now());

    const newItem = {
        id: generatedId,
        title,
        description,
        fun
    };

    doggos.push(newItem);

    addItemToPage(newItem);
    cardsContainer.classList.toggle(HIDDEN_CLASSNAME);
    updateCount();
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, description, fun } = getInputValues();

    if (title === "") {
        alert("Title can't be empty!");
        return;
    }

    clearInputs();

    addItem({
        title,
        description,
        fun
    });

    asidePanel.classList.toggle(HIDDEN_CLASSNAME);
    createDogeContainer.classList.toggle(HIDDEN_CLASSNAME);

});

funInput.addEventListener("input", () => {
    document.getElementById("fun_percentage").innerHTML = `${funInput.value}%`;
});



// main code
// renderItemsList();