function checkEmail() {
    const email = document.getElementById('emailInput').value.trim();
    const resultDisplay = document.getElementById('error');
    
    resultDisplay.textContent = "";
    resultDisplay.className = "";

    if (email === "") {
        resultDisplay.textContent = "Помилка: поле не може бути порожнім ";
        resultDisplay.className = "error-text";
        return;
    }

    if (email.includes("@") && email.includes(".")) {
        resultDisplay.textContent = "Email коректний ";
        resultDisplay.className = "success";
    } else {
        resultDisplay.textContent = "Помилка: email має містити '@' та '.' ";
        resultDisplay.className = "error-text";
    }
}