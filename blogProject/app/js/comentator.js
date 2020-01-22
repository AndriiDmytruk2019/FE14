/*Add Coments*/
function comentator(list) {
    let article = [...document.getElementById( 'result' )
        .getElementsByTagName( 'textarea' )];
    let comentBtn = [...document.getElementById( 'result' )
        .getElementsByClassName( 'coment-block__btn' )];
    
    comentBtn.forEach( (el, index) => {
        el.addEventListener('click', e => {
            e.preventDefault();
            for (var i = 0; i < list.length; i++) {
                if (Number(e.target.name) == list[i].number) {
                    let obj = {
                        'id': list[i]['coments'].length,
                        'user': 'link',
                        'page': article[i].value
                    }
                    list[i]['coments'].push(obj);
                    renderList( list,result );
                    liker(list);
                    comentator(list);
                };
            };
        });
    });
};