
const form = document.querySelector('form');
const input = form.querySelector('input');

function validation(form) {
    let result;

    if (input.value == '') {
        result = false;
    } else {
        result = true;
    }

    return result;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validation(this)) {
        alert('Welcome to the team!');
    } else {
        alert('Email is invalid');
    }
    input.value = '';
});

