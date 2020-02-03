( () => {
    let bol = true;
    const menueBtn = document.querySelector( '.header-block__menue-button' );
    const menueNav = document.querySelector( '.header-block__nav-menu-480-320' );
    const linkHideMunue = [ ...document.querySelectorAll( '.header-block__nav-menu-480-320 > li > a' ) ];
    menueBtn.onclick = function () {
        if ( bol == true ) {
            menueNav.style.display = 'block';
            menueBtn.style.zIndex = '5';
            bol = false;
        } else {
            menueNav.style.display = 'none';
            bol = true;
        }
    };
    linkHideMunue.forEach( el => el.onclick = () => menueNav.style.display = 'none' )
})();