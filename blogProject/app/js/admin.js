/*Admin user*/
// function adminDelete( arr, user ) {
//     const delElements = [ ...document.querySelectorAll( 'div.coment-block__coment-user > p:last-child' ) ];
//     let target,
//         blogIndex,
//         targetId;

//     delElements.forEach( (el, i) => {
//         el.onclick = ( e ) => {
//             if ( blogList[ i ].coments[ e.target.id ].user == user ) {
//                 target = Number( e.target.className );
//                 blogIndex = blogList.findIndex( el => el.number == target );
//                 targetId = blogList[ target ].coments.findIndex( el => el.id == Number( e.target.id ) );
//                 blogList[ blogIndex ].coments.splice( targetId, 1 );
//                 localStorage.setItem('blogList', JSON.stringify(blogList));
//                 renderList( arr, result, user );
//             };
//         };
//     });
// };
