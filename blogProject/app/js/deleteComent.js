/*Delete coments*/
function deleteComent( arr, user ) {
    const delElements = [...document.querySelectorAll('div.coment-block__coment-user > p:last-child')];
    let target,
        blogIndex,
        targetId;

    delElements.forEach( el => {
        el.onclick = ( e ) => {
            target = Number( e.target.className );
            blogIndex = blogList.findIndex( el => el.number == target );
            targetId = blogList[ target ].coments.findIndex( el => el.id == Number( e.target.id ) );
            blogList[ blogIndex ].coments.splice( targetId, 1 );
            renderList( arr, result, user);
            // pagination( arr, userLogged );
            // comentator( arr, user );
            // liker( arr, user );
            // deleteComent( arr, user );
        };
    })
}