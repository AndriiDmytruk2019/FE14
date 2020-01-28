function regProcess( input, btn ) {
    const objUser = {};
    let boolean = false;
    const regBlock = document.getElementById( 'header-block__registration' );
    btn.onclick = el => {
        if ( input[ 0 ].value !== '' && input[ 1 ].value !== '' && input[ 3 ].value !== '' && boolean == false ) {
            for( let i = 0; i < localStorage.length; i++ ) {
                if ( localStorage.key( i ) == input[ 0 ].value ) {
                    boolean = true;
                    alert( 'You are already registered!' );
                } else if ( localStorage.key( i ) == '' ) {
                    localStorage.removeItem( '' );
                } 
            };
            if ( boolean == false && input[ 1 ].value == input[ 2 ].value ) {
                input.forEach( el => objUser[ el.className ] = el.value );
                localStorage.setItem( input[ 0 ].value, JSON.stringify( objUser ) );
                alert( 'You have successfully registered!' );
                regBlock.style.display = 'none';
            } else if ( input[ 1 ].value !== input[ 2 ].value ){
                alert( 'Password fields do not match' );
            }
            input.forEach( el => el.value = '' );
        } else {
            input.forEach( el => el.value == '' ? el.placeholder = 'Incorrect filling' : el.value );
        };
    };
};
