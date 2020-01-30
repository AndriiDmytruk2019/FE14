/*Likes counter*/
function liker( list, user, state ) {
    let targetNum;
    let resultBlock = [ ...document.querySelectorAll( '.article-block > span' ) ]
        .forEach( ( el, i ) => {
            el.addEventListener( 'click', e => {
            e.preventDefault();
            targetNum = list.findIndex( item => item.number == Number(el.className) );
            list[ targetNum ].like++;
            localStorage.setItem('blogList', JSON.stringify(blogList));
            renderList( list, result, user, state );
        });
    });
};