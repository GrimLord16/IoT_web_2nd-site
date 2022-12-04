
const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const itemsContainer = document.getElementById("items_container");
const funInput = document.getElementById("fun_input")

const EDIT_BUTTON_PREFIX = "btn_";

// local functions

const itemTemplate = ({ id, title, description, fun }) => `
<li class="doggos__doge-card" id="item-${id}">
    <div class="doggos__doge-card-image">
        <img src="../assets/doggo.png" alt="dog">
    </div>
    <div class="doggos__doge-card-content">
        <div class="doggos__doge-card-title">${title}</div>
        <div class="doggos__doge-card-description">${description}</div>
        <div class="doggos__doge-card-fun">
            <div class="doggos__doge-card-fun-text">Fun: </div>
            <div class="doggos__doge-card-fun-level">${fun}%</div>
        </div>
        <div class="doggos__doge-card-buttons">
            <button class="doggos__doge-card-edit btn-blue" id="editcat_button">Edit</button>
            <button class="doggos__doge-card-remove btn-red" id="removecat_button">Remove</button>
        </div>
    </div>
</li>`;



// exposed functions
export const clearInputs = () => {
    titleInput.value = "";

    descriptionInput.value = "";
    funInput.value = 0;
};

export const addItemToPage = (item) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({...item, _id: item.id})
    );


};

// export const renderItemsList = (items, onEditItem, onRemoveItem) => {
//     itemsContainer.innerHTML = "";

//     for (const item of items) {
//         addItemToPage(item, onEditItem, onRemoveItem);
//     }
// };


export const getInputValues = () => {
    console.log(funInput.value);
    return {
        title: titleInput.value,
        description: descriptionInput.value,
        fun: funInput.value
    };
};