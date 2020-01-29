/*Logo Slide*/
setTimeout( () => {
    const logo = [ ...document.querySelectorAll( 'div#header-block__logo > a > img' ) ];
    logo[ 0 ].style.left = '34%';
    logo[ 0 ].style.transition = '1.2s';
    logo[ 0 ].style.transform = 'rotate( 0deg )';
}, 1500 );

// setTimeout( () => {
//     const logo = [ ...document.querySelectorAll( 'div#header-block__logo > a > img' ) ];
//     logo[ 1 ].style.left = '41%';
//     logo[ 1 ].style.transition = '1.2s';
//     logo[ 1 ].style.transform = 'rotate( 0deg )';
// }, 1500 );

// setTimeout( () => {
//     const logo = [ ...document.querySelectorAll( 'div#header-block__logo > a > img' ) ];
//     logo[ 2 ].style.left = '48%';
//     logo[ 2 ].style.transition = '1.2s';
//     logo[ 2 ].style.transform = 'rotate( 0deg )';
// }, 2000 );

// setTimeout( () => {
//     const logo = [ ...document.querySelectorAll( 'div#header-block__logo > a > img' ) ];
//     logo[ 3 ].style.left = '55%';
//     logo[ 3 ].style.transition = '1.2s';
//     logo[ 3 ].style.transform = 'rotate( 360deg )';
// }, 2500 );

setTimeout( () => {
    const menueBtn = document.querySelector( 'div.header-block__menue-button' );
    menueBtn.style.left = '5%';
    menueBtn.style.transition = '1.2s';
}, 1000 );