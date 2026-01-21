function checkPassword() {
	let a = Number(prompt('1 число:'));
	let b = Number(prompt('2 число:'));
let op = prompt("Ваша дія (+, -, *, /):");

	let result;

	if (op === '+') {
		result = a + b;
	} else if (op === '-') {
		result = a - b;
	} else if (op === '*') {
		result = a * b;
	} else if (op === "/") {
        if (b === 0) {
					alert("Ділення на нуль неможливе!");
          return;
				}
				result = a / b;
			} else {
				alert("Невідома операція!");
        return;
    }
	alert("Результат: " + result);
}
checkPassword();



	