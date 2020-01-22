/*Change status*/
function stateStatus (state = false, user = 'Anonim') {
	let userName = document.getElementsByClassName('header-block__user-name')[0];
	let btnLogoBlock = [...document.getElementById('header-block__logo')
		.getElementsByTagName('button')];
	let main = document.querySelector('main');
    if (state == true) {
    	// btnLogoBlock[2].style.display = 'block';
    	// btnLogoBlock[0].style.display = 'none';
    	// btnLogoBlock[1].style.display = 'none';
    	userName.innerHTML = user;
    	userName.style.display = 'block';
    	userName.style.top = '5px';
    	userName.style.transition = '1.2s'
        main.style.display = 'block';
        renderList( blogList, result, user );
        comentator(blogList, user);
    }
};