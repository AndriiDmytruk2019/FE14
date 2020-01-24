/*Registration*/
// localStorage.clear();
function registration() {
    const objUser = {};
    const logoBtn = [...document.getElementById('header-block__logo')
        .getElementsByTagName('button')];
    const regBlock = document.getElementById('header-block__registration');
    const regBtn = regBlock.querySelector('button');
    const signBlock = document.getElementById('header-block__sign');
    const signBtn = signBlock.querySelector('button');
    const regInput = [...document.getElementById('header-block__registration')
        .getElementsByTagName('input')];
    const signInput = [...document.getElementById('header-block__sign')
        .getElementsByTagName('input')];
    let boolean = false;

    logoBtn[1].onclick = () => {
        signBlock.style.display = 'none';
        regBlock.style.display = 'block';
    }
    logoBtn[0].onclick = () => {
        signBlock.style.display = 'block';
        regBlock.style.display = 'none';
    }

    function regProcess(input) {
        regBtn.onclick = el => {
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
                    alert('Поля паролей не совпадают');
                }
                input.forEach(el => el.value = '');
            } else {
                input.forEach(el => el.value == '' ? el.placeholder = 'Некоректное заполнение' : el.value);
            }
        }
    };regProcess(regInput);

    function signIn(button, input) {
       button.onclick = () => {
            if (input[0].value !== '' && input[1].value !== '' && boolean == false) {
                for( let i = 0; i < localStorage.length; i++) {
                    let objPars = JSON.parse(localStorage[localStorage.key(i)])['pass'];
                    if (localStorage.key(i) == input[0].value && objPars == input[1].value) {
                        boolean = true;
                        alert('Вход разрешен');
                        userLogged = localStorage.key(i);
                        signBlock.style.display = 'none';
                        localStorage.setItem('LogOn', JSON.stringify(userLogged));
                        stateStatus (true, userLogged);
                    }
                }
                if (boolean == false) {
                    alert('Пользователь не зарегистрирован')
                    regBlock.style.display = 'block';
                    signBlock.style.display = 'none';
                }
                input.forEach(el => el.value = '');
            } else {
                input.forEach(el => el.value == '' ? el.placeholder = 'Заполните поле' : el.value);
            }
        }

    };
    signIn(signBtn, signInput);
}; registration();