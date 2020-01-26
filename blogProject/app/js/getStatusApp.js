// /*Change status*/
// function stateStatus ( state = false, user = 'Anonim' ) {
// 	const userName = document.getElementsByClassName( 'header-block__user-name' )[ 0 ];
// 	const btnLogoBlock = [ ...document.querySelectorAll( 'div#header-block__logo > div > button' ) ];
// 	const main = document.querySelector( 'main' );
//     if ( state == true ) {
//     	btnLogoBlock[ 2 ].style.display = 'block';
//     	btnLogoBlock[ 0 ].style.display = 'none';
//     	btnLogoBlock[ 1 ].style.display = 'none';
//     	userName.innerHTML = user;
//     	userName.style.display = 'block';
//     	userName.style.top = '5px';
//     	userName.style.transition = '1.2s'
//         main.style.display = 'block';
//         pagination( blogList, user );
//         renderList( blogList.slice( 0, 2 ), result, user );
//         // comentator(blogList.slice(0, 2), user);
//         // liker(blogList.slice(0, 2), user);
//         // deleteComent(blogList.slice(0, 2), user );
//     } else {
//         userName.innerHTML = '';
//         // userName.style.display = 'none';
//         main.style.display = 'none';
//     };
// };