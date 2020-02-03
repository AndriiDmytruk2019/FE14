/*Registered user*/
function registeredUser( user ) {
    const userName = document.getElementsByClassName( 'header-block__user-name' )[ 0 ];
    const main = document.querySelector( 'main' );
    userName.innerText = user;
    userName.style = 'display: block; top: 5px; left: 39%; transition: 1.2s'
    main.style.display = 'block';
};