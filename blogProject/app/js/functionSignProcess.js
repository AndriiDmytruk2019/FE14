function signIn( button, input, signBlock, regBlock ) {
    let objPars;
    button.onclick = () => {
        if ( input[ 0 ].value !== '' && input[ 1 ].value !== '' ) {
            objPars = input[ 0 ].value.toLowerCase() in localStorage ? 
                JSON.parse( localStorage[ input[ 0 ].value.toLowerCase() ] ) : '';
            if ( objPars !== '' && objPars.pass == input[ 1 ].value ) {
                    userLogged = input[ 0 ].value.toUpperCase();
                    signBlock.style.display = 'none';
                    localStorage.setItem( 'LogOn', JSON.stringify( userLogged ) );
                    stateStatus ( true, userLogged );
            } else {
                alert('User not registered(')
                regBlock.style.display = 'block';
                signBlock.style.display = 'none';
            }
            input.forEach( el => el.value = '' );
        } else {
            input.forEach( el => el.value == '' ? el.placeholder = 'Fill field' : el.value );
        }
    };
};