/*Likes counter*/
function liker(list,) {
    let resultBlock = [...document.getElementById( 'result' ).getElementsByTagName( 'span' )]
        .forEach( el => {
            el.addEventListener('click', e => {
            e.preventDefault();
            for (var i = 0; i < list.length; i++) {
                if (Number(el.className) == list[i].number) {
                    list[i].like++;
                    renderList( list, result);
                    liker(list);
                    comentator(list);
                };
            };
        });
    });
};