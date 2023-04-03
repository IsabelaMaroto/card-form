const nameInput = document.getElementById("nameInput");
const number = document.getElementById("numberInput");
const month = document.getElementById("monthInput");
const year = document.getElementById("yearInput");
const password = document.getElementById("passwordInput");
const buttonConfirm = document.getElementById("confirm");
const buttonContinue = document.getElementById("continue");
const form = document.getElementById("form");
const completed = document.getElementById("completed");

const nameCard = document.getElementById("nameCard");
const numberCard = document.getElementById("numberCard");
const dateCard = document.getElementById("dateCard");
const passwordCard = document.getElementById("passwordCard");

function maskCardNumber(cardNumber) {
    if (typeof cardNumber === "number") {
        cardNumber = cardNumber.toString();

        if (cardNumber.length === 19) {
            
            return cardNumber.slice(-4).padStart(16, "*").match(/.{4}/g).join(" ");
        }
    } else if (typeof cardNumber === "string") {
        if (cardNumber.length === 19) {
            return cardNumber.slice(-4).padStart(16, "*").match(/.{4}/g).join(" ");
        }
    }

    return cardNumber;
}


function setName() {
    nameInput.onkeyup = function () {
        nameCard.innerText = nameInput.value;

        if (nameInput.value == "") {
            nameCard.innerText = "Jane Appleseed";
        }
    };
}

function setNumber() {
    number.onkeyup = function (event) {
        
        numberCard.innerText = maskCardNumber(number.value)
    
        number.value.trim();

        var key = event.key;

        if( key == 8 || key == 46 ) {

        if(number.value.length == 4) {
            number.value = number.value.slice(0, 4) + " " + number.value.slice(4)
        } 
        
        if(number.value.length == 9) {
            
            let test = 
            number.value.slice(0, 4) + " " + 
            number.value.slice(5, 9) + " ";

            number.value = test;
        }

        if(number.value.length == 14) {
            
            let test = 
            number.value.slice(0, 4) + " " + 
            number.value.slice(5, 9) + " " +
            number.value.slice(10, 14) + " ";

            number.value = test;
        }

        if(number.value.length == 19) {
            
            let test = 
            number.value.slice(0, 4) + " " + 
            number.value.slice(5, 9) + " " +
            number.value.slice(10, 14) + " " +
            number.value.slice(15, 19);

            number.value = test;
        }
    }

        if (number.value == "") {
            numberCard.innerText = "0000 0000 0000 0000";
        }
    };
}

function setDate() {
    let newYear = "00";
    let newMonth = "00";

    year.onkeyup = function () {
        if (year.value == "") {
            dateCard.innerText = `${newMonth}/00`;
        } else {
            newYear = year.value;
            dateCard.innerText = `${newMonth}/${newYear}`;
        }
    };
    month.onkeyup = function () {
        if (month.value == "") {
            dateCard.innerText = `00/${newYear}`;
        } else {
            newMonth = month.value;
            dateCard.innerText = `${newMonth}/${newYear}`;
        }
    };
}

function setPassword() {
    password.onkeyup = function () {
        passwordCard.innerText = password.value;

        if (password.value == "") {
            passwordCard.innerText = "000";
        }
    };
}

function Confirm() {
    completed.style.display = "none";

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (completed.style.display == "none") {
            form.style.display = "none";
            completed.style.display = "flex";
        }
    });

    buttonContinue.onclick = function () {
        window.location.reload();
    };
}

setName();
setNumber();
setDate();
setPassword();
Confirm();