/*Render blog*/
// const result  = document.getElementById( 'result' );
function renderList( list, el, user ) {
	let arrArticle;
    el.innerHTML='';
    createBlogBlock( list, el, user )
    arrArticle = [ ...document.querySelectorAll( '.article-block > h2' ) ];
    openArticle( list, arrArticle, user);
    liker( list, user );
   	comentator( list, user );
    deleteComent( list, user );
    editComent( list, user );
};