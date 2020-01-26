function signIn( button, input, signBlock, regBlock ) {
    let boolean = false;
    let objPars;
    button.onclick = () => {
        if ( input[ 0 ].value !== '' && input[ 1 ].value !== '' && boolean == false ) {
            for( let i = 0; i < localStorage.length; i++ ) {
                objPars = JSON.parse( localStorage[ localStorage.key( i ) ] );
                if ( localStorage.key( i ) == input[ 0 ].value && objPars.pass == input[ 1 ].value ) {
                    boolean = true;
                    userLogged = localStorage.key( i );
                    signBlock.style.display = 'none';
                    localStorage.setItem( 'LogOn', JSON.stringify( userLogged ) );
                    stateStatus ( true, userLogged );
                }
            }
            if ( boolean == false ) {
                alert('Пользователь не зарегистрирован')
                regBlock.style.display = 'block';
                signBlock.style.display = 'none';
            }
            input.forEach( el => el.value = '' );
        } else {
            input.forEach( el => el.value == '' ? el.placeholder = 'Заполните поле' : el.value );
        }
    }
};