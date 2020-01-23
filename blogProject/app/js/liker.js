/*Likes counter*/
function liker( list, user ) {
    let resultBlock = [...document.getElementById( 'result' ).getElementsByTagName( 'span' )]
        .forEach( el => {
            el.addEventListener('click', e => {
            e.preventDefault();
            for (var i = 0; i < list.length; i++) {
                if (Number(el.className) == list[i].number) {
                    list[i].like++;
                    renderList( list, result, user);
                    // pagination(pagination(blogList, user));
                    liker(list, user);
                    comentator(list, user);
                };
            };
        });
    });
};