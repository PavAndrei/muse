
const form = document.querySelector('form');
const input = form.querySelector('input');
const parentDiv = document.querySelector('.academy__inner');
const statusMessage = document.createElement('div');


const message = {
    success: 'Welcome to the team!',
    failure: 'Email is invalid',
}

function validation(form) {
    let result;
    let inputValue = input.value;


    console.log(inputValue);

    if (inputValue.length >= 3 && inputValue.includes('@') && inputValue.includes('.')) {
        result = true;

        statusMessage.textContent = 'Thank you, we will contact you soon';
    } else {
        statusMessage.textContent = 'The email address is too short or does not contain the "@" or "."';
        result = false;
    }
    parentDiv.append(statusMessage);

    return result;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validation(this)) {
        alert(message.success);
    } else {
        alert(message.failure);
    }

    input.value = '';

    setTimeout(() => {
        statusMessage.remove();
    }, 3000);
});

