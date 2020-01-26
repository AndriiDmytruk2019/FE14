/*Button Hide*/
function btnHide() {
    const btnLogoBlock = [ ...document.querySelectorAll( 'div#header-block__logo > div > button' ) ];
    btnLogoBlock[ 2 ].style.display = 'block';
    btnLogoBlock[ 0 ].style.display = 'none';
    btnLogoBlock[ 1 ].style.display = 'none';
};