stateStatus(true);
renderList( blogList,result );
comentator(blogList);
liker(blogList);
pagination(blogList);


(function () {
    let bol = true;
    document.getElementsByClassName('header-block__menue-button')[0]
        .onclick = function () {
            if (bol == true) {
                document.getElementsByClassName('header-block__nav-menu-480-320')[0].style.display = 'block';
                bol = false;
            } else {
                document.getElementsByClassName('header-block__nav-menu-480-320')[0].style.display = 'none';
                bol = true;
            }
        }
})();
