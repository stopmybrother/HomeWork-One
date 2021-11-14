// Ф.И.О.
let yourSurName = prompt('Введите Вашу фамилию:', '');
while (yourSurName === '') {
    alert(`Вы не ввели никаких данных. Попробуйте снова:`);
    yourSurName = prompt('Введите Вашу фамилию:', '');
};

let yourName = prompt('Введите Ваше имя:', '');
while (yourName === '') {
    alert(`Вы не ввели никаких данных. Попробуйте снова:`);
    yourName = prompt('Введите Ваше имя:', '');
};

let yourMiddleName = prompt('Введите Ваше отчество:', '');
while (yourMiddleName === '') {
    alert(`Вы не ввели никаких данных. Попробуйте снова:`);
    yourMiddleName = prompt('Введите Ваше отчество:', '');
};

let fullName = `${yourSurName} ${yourName} ${yourMiddleName}`;

// возраст
let yourAge = +prompt('Введите Ваш возраст в годах:', ''); //поправить
while (isNaN(yourAge) || yourAge < 1) {
    alert(`Попробуйте снова:`);
    yourAge = +prompt('Введите Ваш возраст:', '');
};

let ageInYears = yourAge;
let ageInDays = yourAge * 365;
let ageAfterFiveYears =  yourAge + 5;

// пол
let yourGender = confirm('Ваш пол мужской?');

let gender;
if (yourGender === true) {
    gender = 'мужской';
} else {
    gender = 'женский';
};

// пенсия
let retirement;
if (yourGender === true) {
    if (ageInYears >= 65) {
        retirement = 'да';
    } else {
        retirement = 'нет';
    };
} else {
    if (ageInYears >= 55) {
        retirement = 'да';
    } else {
        retirement = 'нет';
    };
};

// alert
alert (`
    Ваше Ф.И.О.: ${fullName} \n
    Ваш возраст в годах: ${ageInYears} \n
    Ваш возраст в днях: ${ageInDays} \n
    Через 5 лет вам будет: ${ageAfterFiveYears} \n
    Ваш пол: ${gender} \n
    Вы на пенсии: ${retirement}
`);
