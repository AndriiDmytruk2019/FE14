/*Likes counter*/
function liker( list, user ) {
    let resultBlock = [ ...document.querySelectorAll( '.article-block > span' ) ]
        .forEach( ( el, i ) => {
            el.addEventListener( 'click', e => {
            e.preventDefault();
            if ( Number( el.className ) == list[ i ].number ) {
                list[ i ].like++;
                localStorage.setItem('blogList', JSON.stringify(blogList));
                renderList( list, result, user);
                document.querySelector( '.coment-block' ).style.display = 'block';
                document.querySelector( 'p.article' ).style.height = '100%';
            };
        });
    });
};