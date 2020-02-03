/* Pagination*/
function pagination( obj, user ) {
    let i = 1;
    let startPage = 0;
    let pugNum;
    let arrLink;
    const pageSize = Math.ceil( obj.length/5+1 );
    const pugBlock = document.getElementById( 'pagination-block' );
          pugBlock.innerHTML = '';
    if ( obj.length > 5 ) {
        while( i < pageSize ) {
            pugNum = document.createElement( 'a' );
            pugNum.innerText = i;
            pugBlock.appendChild( pugNum );
            i++;
        };
    };
    if (startPage == 0) {
        renderList(obj.slice(startPage, startPage+5), result, user);
    };

    arrLink = [ ...pugBlock.querySelectorAll( 'a' ) ];

    arrLink.forEach( link => {
        link.addEventListener( 'click', e => {
            e.preventDefault();
            startPage = Number( e.target.text );
            renderList( obj.slice( startPage*5-5, startPage*5 ), result, user);
        });
    });
};