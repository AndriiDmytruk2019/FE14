/* Pagination*/
function pagination(obj, user) {
    let k = 1;
    let startPage = 0;
    let target;
    let pageSize = Math.ceil(obj.length/2+1),
        mainBlock = document.querySelector('main'),
        pugBlock = document.getElementById( 'pagination-block' );
        pugBlock.innerHTML = '';
    while(k < pageSize) {
        let pugNum = document.createElement( 'a' );
            pugNum.innerHTML = k;
            pugBlock.appendChild(pugNum);
            k++;
    };
    if (startPage == 0) {
            renderList(obj.slice(startPage, startPage+2) ,result, user);
            startPag = 1;
        }

    let arrLink = [...pugBlock.querySelectorAll('a')];
    arrLink.forEach( el => {
        el.addEventListener('click', e => {console.log(blogList)
            target = Number(e.target.text);
            startPage = Number(e.target.text);
            e.preventDefault();
            let reduce = startPage*2;console.log(reduce)
            if (startPage == Number(e.target.text)) {
                renderList(obj.slice(reduce-2, reduce), result, user);
                liker(obj.slice(reduce-2, reduce), user);
                comentator(obj.slice(reduce-2, reduce), user);
            } else {
                renderList(obj.slice(reduce+2, reduce), result, user);
                liker(obj.slice(reduce+2, reduce), user);
                comentator(obj.slice(reduce+2, reduce), user);
            }
        });
    });
};