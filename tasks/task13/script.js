let massage = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';