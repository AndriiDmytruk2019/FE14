/*Add Coments*/
function comentator( list, user, state ) {
    let article = [ ...document.querySelectorAll( 'div.coment-block > textarea' ) ];
    let comentBtn = [ ...document.querySelectorAll( 'button.coment-block__btn' ) ];
    let comentObj;
    
    comentBtn.forEach( ( el,i ) => {
        el.addEventListener( 'click', e => {
            e.preventDefault();
            let target = Number( e.target.name );
            if ( article[ i ].value == '' ) {
                alert( 'Before sending, fill in the comment field!' )
            } else if (  target  == list[ i ].number ) {
                comentObj = {
                    'id': list[ i ][ 'coments' ].length,
                    'user': user,
                    'timePublic': new Date().getFullYear() + '-' + new Date().getMonth() + 1 + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
                    'page': article[ i ].value,
                };
                list[ i ][ 'coments' ].push( comentObj );
                localStorage.setItem('blogList', JSON.stringify(blogList));
                renderList( list, result, user, state );
            };
        });
    });
};