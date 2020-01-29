( () => {
    let bol = true;
    const menueBtn = document.getElementsByClassName( 'header-block__menue-button' )[ 0 ];
    const menue = document.getElementsByClassName( 'header-block__nav-menu-480-320' );
    menueBtn.onclick = function () {
        if ( bol == true ) {
            menue[ 0 ].style.display = 'block';
            menueBtn.style.zIndex = '5';
            bol = false;
        } else {
            menue[ 0 ].style.display = 'none';
            bol = true;
        }
    }
})();