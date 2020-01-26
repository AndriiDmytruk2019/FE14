/*Add Coments*/
function comentator( list, user) {
    let article = [ ...document.querySelectorAll( 'div.coment-block > textarea' ) ];
    let comentBtn = [ ...document.querySelectorAll( 'button.coment-block__btn' ) ];
    let obj;
    
    comentBtn.forEach( ( el, i ) => {
        el.addEventListener( 'click', e => {
            e.preventDefault();
            if ( article[ i ].value == '' ) {
                alert( 'Перед отправкой заполните поле коментария!' )
            } else {
                if ( Number( e.target.name ) == list[ i ].number ) {
                    obj = {
                        'id': list[ i ][ 'coments' ].length,
                        'user': user,
                        'page': article[ i ].value,
                    }
                    list[ i ][ 'coments' ].push( obj );
                    renderList( list, result, user );
                };
            };
        });
    });
};