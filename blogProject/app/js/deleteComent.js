/*Delete coments*/
function deleteComent( arr, user, state ) {
    const delElements = [ ...document.querySelectorAll( 'div.coment-block__coment-user > span:last-child' ) ];
    let target,
        blogIndex,
        targetId;

    delElements.forEach( (el, i) => {
        el.onclick = ( e ) => {
            target = Number( e.target.className );
            blogIndex = blogList.findIndex( el => el.number == target );
            targetId = blogList[ blogIndex ].coments.findIndex( el => el.id == Number( e.target.id ) );
            if ( blogList[ blogIndex ].coments[ targetId ].user == user ) {
                blogList[ blogIndex ].coments.splice( targetId, 1 );
                localStorage.setItem('blogList', JSON.stringify(blogList));
                renderList( arr, result, user, state );
            } else {
                alert('You cannot delete someone else’s comment!')
            };
        };
    });
};