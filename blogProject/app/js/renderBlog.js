/*Render blog*/
// const result  = document.getElementById( 'result' );
function renderList( list, el, user, stateArt ) {
	let arrArticle;
    el.innerHTML='';
    btnHide();
    selectHeading( user, stateArt );
    selectTime( user, stateArt );
    createBlogBlock( list, el, user )
    arrArticle = [ ...document.querySelectorAll( '.article-block > h2' ) ];
    openArticle( list, arrArticle, user );
    liker( list, user, stateArt );
   	comentator( list, user, stateArt );
    deleteComent( list, user, stateArt );
    editComent( list, user );
    articleState( stateArt, user );
};