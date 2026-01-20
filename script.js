function getNumbers() {
    let num1 = Number(document.getElementById("input1").value);
    let num2 = Number(document.getElementById("input2").value);
    return { num1, num2 };
}

function showPopup(result) {
    document.getElementById("popupResult").innerText = result;
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

function add() {
    let { num1, num2 } = getNumbers();
    showPopup(num1 + num2);
}

function subtract() {
    let { num1, num2 } = getNumbers();
    showPopup(num1 - num2);
}

function multiply() {
    let { num1, num2 } = getNumbers();
    showPopup(num1 * num2);
}

function divide() {
    let { num1, num2 } = getNumbers();
    if (num2 === 0) {
        showPopup("ERROR");
    } else {
        showPopup(num1 / num2);
    }
}

function clearAll() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("resultDisplay").innerText = "0";
}
