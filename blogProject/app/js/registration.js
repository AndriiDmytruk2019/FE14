/*Registration*/
// localStorage.clear();
function registration() {
    const logoBtn = [...document.getElementById('header-block__logo')
        .getElementsByTagName('button')];
    const regBlock = document.getElementById('header-block__registration');
    const regBtn = regBlock.querySelector('button');
    const signBlock = document.getElementById('header-block__sign');
    const signBtn = signBlock.querySelector('button');
    const regInput = [...document.getElementById('header-block__registration')
        .getElementsByTagName('input')];
    const signInput = [...document.getElementById('header-block__sign')
        .getElementsByTagName('input')];

    logoBtn[1].onclick = () => {
        signBlock.style.display = 'none';
        regBlock.style.display = 'block';
    }
    logoBtn[0].onclick = () => {
        signBlock.style.display = 'block';
        regBlock.style.display = 'none';
    }

    regProcess(regInput, regBtn);
    signIn(signBtn, signInput, signBlock, regBlock);
}; 
registration();