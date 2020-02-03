function regProcess( input, btn ) {
    const objUser = {};
    let newUser;
    const regBlock = document.getElementById( 'header-block__registration' );
    btn.onclick = el => {
        if ( input[ 0 ].value !== '' && input[ 1 ].value !== '' && input[ 3 ].value !== '' ) {
            if ( input[ 0 ].value in localStorage ) {
                    alert( 'You are already registered!' );
            } else if ( input[ 1 ].value == input[ 2 ].value ) {
                localStorage.removeItem( '' );
                newUser = input[ 0 ].value.toLowerCase();
                input.forEach( el => objUser[ el.className ] = el.value.toLowerCase() );
                localStorage.setItem( newUser, JSON.stringify( objUser ) );
                alert( 'You have successfully registered!' );
                regBlock.style.display = 'none';
                localStorage.setItem( 'LogOn', JSON.stringify( newUser ) );
                stateStatus( true, newUser );
            } else {
                alert( 'Password fields do not match' );
            }
            input.forEach( el => el.value = '' );
        } else {
            input.forEach( el => el.value == '' ? el.placeholder = 'Incorrect filling' : el.value );
        };
    };
};
