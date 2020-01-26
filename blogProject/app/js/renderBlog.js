/*Render blog*/
// const result  = document.getElementById( 'result' );
function renderList( list, el, user ){
    el.innerHTML='';
    createBlogBlock( list, el, user )
};