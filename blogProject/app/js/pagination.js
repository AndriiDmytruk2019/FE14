/* Pagination*/
function pagination(obj, user) {
    let k = 1;
    let startPag = 0;
    let nextPag = 0;
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
    if (startPag == 0) {
            renderList(obj.slice(nextPag, nextPag+2) ,result, user);
            startPag = 1;
            nextPag = 2;
        }

    let arrLink = [...pugBlock.querySelectorAll('a')];
    arrLink.forEach( el => {
        el.addEventListener('click', e => {
            let target = Number(e.target.text);
            e.preventDefault();
            if (startPag < Number(e.target.text)) {
                renderList(obj.slice(nextPag, nextPag+2), result, user);
                liker(obj.slice(nextPag, nextPag+2), user);
                comentator(obj.slice(nextPag, nextPag+2), user);
                nextPag += 2;
                startPag = Number(e.target.text);
            } else if (startPag > Number(e.target.text)) {
                renderList(obj.slice(nextPag-4, nextPag-2) ,result, user);
                liker(obj.slice(nextPag-4, nextPag-2), user);
                comentator(obj.slice(nextPag-4, nextPag-2), user);
                nextPag -= 2;
                startPag = Number(e.target.text);
            }
        });
    });
};