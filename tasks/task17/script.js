let login = prompt('Кто там?','');

if (login == 'Админ'){
    let pass = prompt('Введите пароль','');
    if (pass == 'Я тут главный'){
        alert('Здравствуйте!');
    } else if (pass == '' || pass == null){
        alert('Отменено');
    } else {
        alert('Неверный пароль!');
    }
} else if (login == '', login == null){
    alert('Отменено');
} else{
    alert('Я вас не знаю')
} 