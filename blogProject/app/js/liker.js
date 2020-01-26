/*Likes counter*/
function liker( list, user ) {
    let resultBlock = [ ...document.querySelectorAll( 'div#result > div.result__render-article > span' ) ]
        .forEach( ( el, i ) => {
            el.addEventListener( 'click', e => {
            e.preventDefault();
            if ( Number( el.className ) == list[ i ].number ) {
                list[ i ].like++;
                renderList( list, result, user);
            };
        });
    });
};