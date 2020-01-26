/*Logo Slide*/
setTimeout( () => {
    const logo = [ ...document.querySelectorAll( 'div#header-block__logo > a > img' ) ];console.log(logo)
    logo[ 0 ].style.left = '32%';
    logo[ 0 ].style.transition = '1.2s';
    logo[ 0 ].style.transform = 'rotate( 0deg )';
}, 1000 );

setTimeout( () => {
    const logo = [ ...document.querySelectorAll( 'div#header-block__logo > a > img' ) ];console.log(logo)
    logo[ 1 ].style.left = '41%';
    logo[ 1 ].style.transition = '1.2s';
    logo[ 1 ].style.transform = 'rotate( 0deg )';
}, 1500 );

setTimeout( () => {
    const logo = [ ...document.querySelectorAll( 'div#header-block__logo > a > img' ) ];console.log(logo)
    logo[ 2 ].style.left = '50%';
    logo[ 2 ].style.transition = '1.2s';
    logo[ 2 ].style.transform = 'rotate( 0deg )';
}, 2000 );

setTimeout( () => {
    const logo = [ ...document.querySelectorAll( 'div#header-block__logo > a > img' ) ];console.log(logo)
    logo[ 3 ].style.left = '60%';
    logo[ 3 ].style.transition = '1.2s';
    logo[ 3 ].style.transform = 'rotate( 360deg )';
}, 2500 );