/*Registered user*/
function registeredUser( user ) {
    const userName = document.getElementsByClassName( 'header-block__user-name' )[ 0 ];
    const main = document.querySelector( 'main' );
    userName.innerHTML = user;
    userName.style.display = 'block';
    userName.style.top = '5px';
    userName.style.transition = '1.2s'
    main.style.display = 'block';
};