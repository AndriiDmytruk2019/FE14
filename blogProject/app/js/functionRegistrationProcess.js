function regProcess( input, btn ) {
    const objUser = {};
    let boolean = false;
    const regBlock = document.getElementById('header-block__registration');
    btn.onclick = el => {
        if (input[0].value !== '' && input[1].value !== '' && input[3].value !== '' && boolean == false) {
            for( let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) == input[0].value) {
                    boolean = true;
                    alert('Вы уже зарегистрированы');
                }
                if (localStorage.key(i) == '') {
                    localStorage.removeItem('');
                } 
            }
        if (boolean == false && input[1].value == input[2].value) {
                input.forEach(el => objUser[el.className] = el.value);
                localStorage.setItem(input[0].value, JSON.stringify(objUser));
                alert('Вы успешно зарегистрированы!');
                regBlock.style.display = 'none';
        } else {
            alert( 'Поля паролей не совпадают' );
        }
        input.forEach(el => el.value = '');
        } else {
            input.forEach(el => el.value == '' ? el.placeholder = 'Некоректное заполнение' : el.value);
        }
    }
};
