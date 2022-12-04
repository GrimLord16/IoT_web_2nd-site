const funInput = document.getElementById("fun_input");

funInput.addEventListener("input", () => {
    document.getElementById("fun_percentage").innerHTML = `${funInput.value}%`;
});