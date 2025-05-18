
// Exercise 6
function validate(event) {
	event.preventDefault();
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN");
	var errorEmail = document.getElementById("errorEmail");
	var errorPassword = document.getElementById("errorPassword");
	var errorAddress = document.getElementById("errorAddress");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	let verificationResult;

	//validacion fName
	let messageName = "";
	verificationResult = notEmpty(fName.value);
	if (verificationResult != true) {
		messageName += verificationResult;
		error++;
	}
	verificationResult = minThreeCharacters(fName.value);
	if (verificationResult != true) {
		messageName += verificationResult;
		error++;
	}

	verificationResult = onlyLetters(fName.value);
	if (verificationResult != true) {
		messageName += verificationResult;
		error++;
	}

	if (messageName.trim().length > 0) {
		fName.classList.remove("is-valid");
		fName.classList.add("is-invalid");
		errorName.innerHTML = messageName;
		errorName.classList.add("d-block");
	} else {
		errorName.classList.remove("d-block");
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}


	//validacion fLastN
	let messageLastN = "";
	verificationResult = notEmpty(fLastN.value);
	if (verificationResult != true) {
		messageLastN += verificationResult;
		error++;
	}
	verificationResult = minThreeCharacters(fLastN.value);
	if (verificationResult != true) {
		messageLastN += verificationResult;
		error++;
	}

	verificationResult = onlyLetters(fLastN.value);
	if (verificationResult != true) {
		messageLastN += verificationResult;
		error++;
	}

	if (messageLastN.trim().length > 0) {
		fLastN.classList.remove("is-valid");
		fLastN.classList.add("is-invalid");
		errorLastN.innerHTML = messageLastN;
		errorLastN.classList.add("d-block");
	} else {
		errorLastN.classList.remove("d-block");
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	}


	//validacion fEmail
	let messageEmail = "";
	verificationResult = notEmpty(fEmail.value);
	if (verificationResult != true) {
		messageEmail += verificationResult;
		error++;
	}

	verificationResult = isEmail(fEmail.value);
	if (verificationResult != true) {
		messageEmail += verificationResult;
		error++;
	}

	if (messageEmail.trim().length > 0) {
		fEmail.classList.remove("is-valid");
		fEmail.classList.add("is-invalid");
		errorEmail.innerHTML = messageEmail;
		errorEmail.classList.add("d-block");
	} else {
		errorEmail.classList.remove("d-block");
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}


	//validacion fPassword
	let messagePassword = "";
	verificationResult = notEmpty(fPassword.value);
	if (verificationResult != true) {
		messagePassword += verificationResult;
		error++;
	}
	verificationResult = minThreeCharacters(fPassword.value);
	if (verificationResult != true) {
		messagePassword += verificationResult;
		error++;
	}

	verificationResult = lettersAndNumbres(fPassword.value);
	if (verificationResult != true) {
		messagePassword += verificationResult;
		error++;
	}

	if (messagePassword.trim().length > 0) {
		fPassword.classList.remove("is-valid");
		fPassword.classList.add("is-invalid");
		errorPassword.innerHTML = messagePassword;
		errorPassword.classList.add("d-block");
	} else {
		errorPassword.classList.remove("d-block");
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}


	//validacion fAddress
	let messageAddress = "";
	verificationResult = notEmpty(fAddress.value);
	if (verificationResult != true) {
		messageAddress += verificationResult;
		error++;
	}
	verificationResult = minThreeCharacters(fPassword.value);
	if (verificationResult != true) {
		messageAddress += verificationResult;
		error++;
	}
	if (messageAddress.trim().length > 0) {
		fAddress.classList.remove("is-valid");
		fAddress.classList.add("is-invalid");
		errorAddress.innerHTML = messageAddress;
		errorAddress.classList.add("d-block");
	} else {
		errorAddress.classList.remove("d-block");
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	}


	//validacion fPhone
	let messagePhone = "";
	verificationResult = notEmpty(fPhone.value);
	if (verificationResult != true) {
		messagePhone += verificationResult;
		error++;
	}
	verificationResult = minThreeCharacters(fPhone.value);
	if (verificationResult != true) {
		messagePhone += verificationResult;
		error++;
	}

	verificationResult = onlyNumbers(fPhone.value);
	if (verificationResult != true) {
		messagePhone += verificationResult;
		error++;
	}

	if (messagePhone.trim().length > 0) {
		fPhone.classList.remove("is-valid");
		fPhone.classList.add("is-invalid");
		errorPhone.innerHTML = messagePhone;
		errorPhone.classList.add("d-block");
	} else {
		errorPhone.classList.remove("d-block");
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}

	console.log(error);

	if (error == 0) {
		alert("Formulario validado correctamente!!!");
	}

}

function notEmpty(input) {
	return (input || input.trim() !== "") ? true : "El campo no puede estar vacío. ";
}

function minThreeCharacters(input) {
	return (input.length >= 3) ? true : "El campo debe tener al menos 3 caracteres. ";
}

function onlyLetters(input) {
	return (/^[a-zA-Z]+$/.test(input)) ? true : "El campo solo puede contener letras. ";
}

function onlyNumbers(input) {
	return (/^[0-9]+$/.test(input)) ? true : "Solo puede contener números. ";
}

function lettersAndNumbres(input) {
	return (/^(?=.*\d)(?=.*[a-zA-Z]).*$/.test(input)) ? true : "Debe contener letras y números. ";
}
function isEmail(input) {
	return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) ? true : "Email no válido. ";
}

