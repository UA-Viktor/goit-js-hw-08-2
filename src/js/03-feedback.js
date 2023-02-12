import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const data = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

getDatalocalStorage();

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(KEY);
};

function onInput(e) {
    data[e.target.name] = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(data));
};

function getDatalocalStorage() {
    if (!localStorage.getItem(KEY)) {
        return;
    };

    try {
        const savedData = JSON.parse(localStorage.getItem(KEY));
        refs.email.value = savedData.email;
        refs.message.value = savedData.message;
    } catch (error) {
        alert('Не получилось получить данные');
    };
};