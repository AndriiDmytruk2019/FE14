/*Registration*/
function registration() {
    const logoBtn = [ ...document.querySelectorAll( 'div#header-block__logo > div > button' ) ];
    const regBlock = document.getElementById( 'header-block__registration' );
    const regBtn = regBlock.querySelector( 'button' );
    const signBlock = document.getElementById( 'header-block__sign' );
    const signBtn = signBlock.querySelector( 'button' );
    const regInput = [ ...document.querySelectorAll( 'div#header-block__registration > input' ) ];
    const signInput = [ ...document.querySelectorAll( 'div#header-block__sign > input' ) ];

    logoBtn[ 1 ].onclick = () => {
        signBlock.style.display = 'none';
        regBlock.style.display = 'flex';
    }
    logoBtn[ 0 ].onclick = () => {
        signBlock.style.display = 'flex';
        regBlock.style.display = 'none';
    }
    regProcess( regInput, regBtn );
    signIn( signBtn, signInput, signBlock, regBlock );
};
registration();