/*Edit coments*/
function editComent( obj, user ) {
    const createElements = [ ...document.querySelectorAll( 'div.coment-block__coment-user' ) ];
    const innerElements = [ ...document.querySelectorAll( '.coment-block__coment-user > p:nth-child(2)' ) ];
    const pageClass = [ ...document.querySelectorAll( '.coment-block__coment-user > p:last-child' ) ];
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
                    target = e.target;
                    blogList.forEach( ( el, i ) => {
                    if ( blogList[ i ].number == target.className ) {
                        blogList[ i ].coments[ target.id ].page = textCreate.value;
                        inputRefresh.style.display = 'none';
                        textCreate.style.display = 'none';
                        renderList( obj, result, user );
                    };
                });
            };
        };
    });
};