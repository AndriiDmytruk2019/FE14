/* Pagination*/
function pagination(obj, target = 0, user) {
    let k = 1;
    let pageSize = Math.ceil(obj.length/2+1),
        mainBlock = document.querySelector('main'),
        pugBlock = document.getElementById( 'pagination-block' );
        pugBlock.innerHTML = '';
    while(k < pageSize) {
        let pugNum = document.createElement( 'a' );
            pugNum.innerHTML = k;
            pugNum.setAttribute('href', '#')
            pugBlock.appendChild(pugNum);
            k++;
    };

    let arrLink = [...pugBlock.querySelectorAll('a')];
        arrLink.forEach( el => {
            if (target == 0) {
                renderList( obj.slice( 0, 2 ) ,result);
                liker(obj.slice( 0, 2 ));
                comentator(obj.slice( 0, 2 ), user);
            };
            el.addEventListener('click', e => {
            e.preventDefault();
            let numTrget = Number(e.target.text);
            let a = 0;
            let b = 0;
            for (let i = 0; i < arrLink.length; i++) {
                if ( numTrget!== 1 && numTrget%2 == 0) {
                    pagination(obj, target = 1);
                    renderList(obj.slice(numTrget+1, numTrget+3) ,result)
                    liker(obj.slice(numTrget, numTrget+2));
                    comentator(obj.slice(numTrget, numTrget+2), user);
                } else if ( numTrget == 1 ) {
                    pagination(obj, target = 1);
                    renderList(obj.slice(numTrget-1, numTrget+1) ,result)
                    liker(obj.slice(numTrget-1, numTrget+2));
                    comentator(obj.slice(numTrget-1, numTrget+2), user);
                }
                if ( numTrget !== 1 && numTrget%2 == 1 ) {
                    pagination(obj, target = 1);
                    renderList(obj.slice(numTrget+1, numTrget+3) ,result)
                    liker(obj.slice(numTrget, numTrget+2));
                    comentator(obj.slice(numTrget, numTrget+2), user);
                }
            }
        });
    });
};