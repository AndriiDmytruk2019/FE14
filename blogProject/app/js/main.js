
let userLogged = localStorage.getItem( 'LogOn' ) !== 'null' ? localStorage.getItem( 'LogOn' ).replace( /\"/g, "" ) : 'Anonim';


if( localStorage.getItem( 'LogOn') !== 'null' ) {
    let userFromLocal = localStorage.getItem( 'LogOn', JSON.stringify( userLogged ) );
    stateStatus( true, userFromLocal.replace( /\"/g, "" ) );
} else {
    localStorage.setItem( 'LogOn', JSON.stringify( null ) );
};

setTimeout( () => {
    const logo = [ ...document.querySelectorAll( 'div#header-block__logo > a' ) ];
    logo[ 0 ].style.left = '5%';
    logo[ 0 ].style.transition = '1.2s';
    logo[ 0 ].style.transform = 'rotate( 0deg )';
}, 1000 );

( () => {
    let bol = true;
    const menueBtn = document.getElementsByClassName( 'header-block__menue-button' )[ 0 ];
    const menue = document.getElementsByClassName( 'header-block__nav-menu-480-320' );
    menueBtn.onclick = function () {
        if ( bol == true ) {
            menue[ 0 ].style.display = 'block';
            bol = false;
        } else {
            menue[ 0 ].style.display = 'none';
            bol = true;
        }
    }
} )();
