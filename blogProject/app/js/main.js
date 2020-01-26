let userLogged = localStorage.getItem( 'LogOn' ) !== 'null' ? localStorage.getItem( 'LogOn' ).replace( /\"/g, "" ) : 'Anonim';


if( localStorage.getItem( 'LogOn') !== 'null' ) {
    let userFromLocal = localStorage.getItem( 'LogOn', JSON.stringify( userLogged ) );
    stateStatus( true, userFromLocal.replace( /\"/g, "" ) );
} else {
    localStorage.setItem( 'LogOn', JSON.stringify( null ) );
};

function stateStatus ( state = false, user = 'Anonim' ) {
    const userName = document.getElementsByClassName( 'header-block__user-name' )[ 0 ];
    const main = document.querySelector( 'main' );
    registeredUser( user );
    if ( state == true ) {
        btnHide();
        pagination( blogList, user );
        renderList( blogList.slice( 0, 2 ), result, user );
    } else {
        userName.innerHTML = '';
        // userName.style.display = 'none';
        main.style.display = 'none';
    };
};


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
})();
