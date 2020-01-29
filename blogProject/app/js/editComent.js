/*Edit coments*/
function editComent( obj, user ) {
    const createElements = [ ...document.querySelectorAll( 'div.coment-block__coment-user' ) ];
    const innerElements = [ ...document.querySelectorAll( '.coment-block__coment-user > p' ) ];
    const pageClass = [ ...document.querySelectorAll( '.coment-block__coment-user > span:last-child' ) ];
    let inputRefresh;
    let textCreate;
    let target;

    innerElements.forEach( ( el,i ) => {
        el.onclick = ( e ) => {
            inputRefresh = document.createElement( 'button' );
            textCreate = document.createElement( 'textarea' );
            inputRefresh.className = pageClass[ i ].className;
            inputRefresh.id = pageClass[ i ].id;
            textCreate.value = innerElements[ i ].innerHTML;
            inputRefresh.innerText = 'Refresh';
            createElements[ i ].appendChild(textCreate);
            createElements[ i ].appendChild( inputRefresh )
                inputRefresh.onclick = ( e ) => {
                    target = Number( e.target.className );
                    blogIndex = blogList.findIndex( el => el.number == target );
                    targetId = blogList[ blogIndex ].coments.findIndex( el => el.id == Number( e.target.id ) );
                    // blogList.forEach( ( el, i ) => {
                    if ( blogList[ blogIndex ].number == target && blogList[ blogIndex ].coments[ targetId ].user == user ) {
                        blogList[ blogIndex ].coments[ targetId ].page = textCreate.value;
                        inputRefresh.style.display = 'none';
                        textCreate.style.display = 'none';
                        localStorage.setItem('blogList', JSON.stringify(blogList));
                        renderList( obj, result, user );
                        document.querySelector( '.coment-block' ).style.display = 'block';
                    } else {
                        alert('You cannot edit someone else’s comment!')
                        inputRefresh.style.display = 'none';
                        textCreate.style.display = 'none';
                    };
                // });
            };
        };
    });
};