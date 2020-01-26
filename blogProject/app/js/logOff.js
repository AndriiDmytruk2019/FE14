/*LogOff*/
function logOff() {
    const btnLogoBlock = [ ...document.getElementById( 'header-block__logo' )
        .getElementsByTagName('button')];
    btnLogoBlock[2].onclick = (e) => {
        localStorage.removeItem( 'LogOn' );
        btnLogoBlock[2].style.display = 'none';
        btnLogoBlock[0].style.display = 'block';
        btnLogoBlock[1].style.display = 'block';
        stateStatus( false );
        localStorage.setItem('LogOn', JSON.stringify(null));
    }
};logOff();