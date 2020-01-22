let userLogged = 'Anonim';

stateStatus();
deleteComent();
renderList( blogList,result, userLogged );
comentator(blogList, userLogged);
liker(blogList);
pagination(blogList, userLogged);



setTimeout(() => {
    const logo = document.getElementById('header-block__logo')
        .getElementsByTagName('a');
    logo[0].style.left = '5%';
    logo[0].style.transition = '1.2s';
    logo[0].style.transform = 'rotate(0deg)';
}, 1000);

(() => {
    let bol = true;
    const menuBtn = document.getElementsByClassName('header-block__menue-button')[0];
    menuBtn.onclick = function () {
        if (bol == true) {
            document.getElementsByClassName('header-block__nav-menu-480-320')[0].style.display = 'block';
            bol = false;
        } else {
            document.getElementsByClassName('header-block__nav-menu-480-320')[0].style.display = 'none';
            bol = true;
        }
    }
})();
