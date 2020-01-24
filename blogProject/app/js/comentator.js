/*Add Coments*/
function comentator( list, user) {
    let article = [...document.getElementById( 'result' )
        .getElementsByTagName( 'textarea' )];
    let comentBtn = [...document.getElementById( 'result' )
        .getElementsByClassName( 'coment-block__btn' )];
    
    comentBtn.forEach( (el, index) => {
        el.addEventListener('click', e => {
            e.preventDefault();
            if (article[index].value == '') {
                alert('Перед отправкой заполните поле коментария!')
            } else {console.log(blogList)
                for (var i = 0; i < list.length; i++) {
                    if (Number(e.target.name) == list[i].number) {
                        let obj = {
                            'id': list[i]['coments'].length,
                            'user': user,
                            'page': article[i].value
                        }
                        list[i]['coments'].push(obj);
                        renderList( list,result, user );
                        liker(list, user);
                        comentator(list, user);
                        deleteComent(list, user);
                    };
                };
            };
        });
    });
};