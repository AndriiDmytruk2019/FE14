/*Open article*/
function openArticle( list, elements, user ) {
    elements.forEach( el => {
        el.onclick = (e) => {

            e.preventDefault();
            let selectArticle = list.filter( el => { 
                return el.number == e.target.className;
            });
            pagination( selectArticle, user );
            renderList( selectArticle, result, user, true );
        };
    })
};