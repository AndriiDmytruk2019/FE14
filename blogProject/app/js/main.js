let userLogged = localStorage.getItem( 'LogOn' ) !== 'null' ? localStorage.getItem( 'LogOn' ).replace( /\"/g, "" ) : 'Anonim';

if( localStorage.getItem( 'LogOn') !== 'null' ) {
    let userFromLocal = localStorage.getItem( 'LogOn', JSON.stringify( userLogged ) );
    stateStatus( true, userLogged );
} else {
    localStorage.setItem( 'LogOn', JSON.stringify( null ) );
    stateStatus();
};

function stateStatus( state = false, user = 'Anonim' , stateArticleOpen = false ) {
    const userName = document.getElementsByClassName( 'header-block__user-name' )[ 0 ];
    const articleArr = [ ...document.querySelectorAll( 'div' ) ];
    const main = document.querySelector( 'main' );
    registeredUser( user );
    if ( state == true ) {
        btnHide();
        selectHeading( user, stateArticleOpen );
        selectTime( user, stateArticleOpen );
        pagination( blogList, user, stateArticleOpen );
        renderList( blogList.slice( 0, 5 ), result, user, stateArticleOpen );
    } else {
        main.style.display = 'none';
        userName.innerHTML = '';
    };
};