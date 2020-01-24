/* Pagination*/
function pagination(obj, user) {
    let i = 1;
    let startPage = 0;
    let pugNum;
    let arrLink;
    const pageSize = Math.ceil(obj.length/2+1);
    const mainBlock = document.querySelector('main');
    const pugBlock = document.getElementById( 'pagination-block' );
          pugBlock.innerHTML = '';

    while( i < pageSize ) {
        pugNum = document.createElement( 'a' );
        pugNum.innerHTML = i;
        pugBlock.appendChild( pugNum );
        i++;
    };
    if (startPage == 0) {
        renderList(obj.slice(startPage, startPage+2) ,result, user);
    }
    arrLink = [ ...pugBlock.querySelectorAll( 'a' ) ];

    arrLink.forEach( link => {
        link.addEventListener( 'click', e => {
            e.preventDefault();
            startPage = Number( e.target.text );
            pagination( obj.slice( startPage*2-2, startPage*2 ), user );
            renderList( obj.slice( startPage*2-2, startPage*2 ), result, user );
            liker( obj.slice( startPage*2-2, startPage*2 ), user );
            comentator( obj.slice( startPage*2-2, startPage*2 ), user );
        });
    });
};