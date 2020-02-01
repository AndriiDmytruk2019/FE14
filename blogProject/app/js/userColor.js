/*User color*/
function userColor( user ) {
    [ ...document.querySelectorAll( 'div.coment-block__coment-user > a:first-child' ) ]
        .forEach ( el => el.innerHTML == user ? el.style.color = '03a9f475' : el.style.color = '#808080' );
};