/*LogOff*/
function logOff() {
    const btnLogoBlock = [ ...document.querySelectorAll( 'div#header-block__logo > div > button' ) ];
    btnLogoBlock[ 2 ].onclick = ( e ) => {
        e.preventDefault();
        localStorage.removeItem( 'LogOn' );
        btnLogoBlock[ 2 ].style.display = 'none';
        btnLogoBlock[ 0 ].style.display = 'block';
        btnLogoBlock[ 1 ].style.display = 'block';
        localStorage.setItem( 'LogOn', JSON.stringify( null ) );
        stateStatus( false );
    }
};
logOff();