/*State status article*/
function articleState( state ) {
    if ( state == false ) {
        document.querySelector( '.coment-block' ).style.display = 'none';
    } else if ( state == true ) {
        document.querySelector( '.coment-block' ).style.display = 'block';
        document.querySelector( 'p.article' ).style.height = '100%';
    }
};
